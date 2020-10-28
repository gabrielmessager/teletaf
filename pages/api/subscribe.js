import mailchimp from "@mailchimp/mailchimp_marketing";

async function subscribeEmail(email) {
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
    const response = await subscribeEmail(email);
    res.status(201).json({ success: true, error: "" });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, error: error.message || error.toString() });
  }
};
