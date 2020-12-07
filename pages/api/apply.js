import mailchimp from '@mailchimp/mailchimp_marketing';

async function apply() {
  // mailchimp.setConfig({
  //   apiKey: process.env.MAILCHIMP_API_KEY,
  //   server: 'us2',
  // });

  // const response = await mailchimp.lists.addListMember(
  //   process.env.MAILCHIMP_LIST_ID,
  //   {
  //     email_address: email,
  //     status: 'subscribed',
  //   }
  // );
  // return response;
  console.log('hello');
}

export default async (req, res) => {
  try {
    const { id } = req.body;
    // const response = await subscribeEmail(email);
    // res.status(201).json({ success: true, error: '' });
    console.log('hello in export', id);
    // const query = { id, update: applicants:  };
    // const jobposts = await db.collection('jobs').findAndModify(query).toArray();

    // await req.db
    //   .collection('jobs')
    //   .updateOne(
    //     { date: new Date(data.date) },
    //     { $set: data },
    //     { upsert: true }
    //   );
  } catch (error) {
    res
      .status(400)
      .json({ success: false, error: error.message || error.toString() });
  }
};
