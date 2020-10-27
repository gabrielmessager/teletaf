import mailchimp from "@mailchimp/mailchimp_marketing";

async function run(email) {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: "us2",
  });

  const response = await mailchimp.lists.addListMember(
    process.env.MAILCHIMP_LIST_ID,
    {
      email_address: email,
      status: "subscribed",
    }
  );

  return response;
}

export default async (req, res) => {
  try {
    const { email } = req.body;
    console.log("email", email);

    const response = await run(email);
    res.status(201).json({ success: true, error: "" });
  } catch (error) {
    console.log("ERROR", error);
    res
      .status(400)
      .json({ success: false, error: error.message || error.toString() });
  }
};
