// import mailchimp from '@mailchimp/mailchimp_marketing';
import { connectToDatabase } from '../../util/mongodb';
import { ObjectID } from 'mongodb';

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
    const { db } = await connectToDatabase();

    // const query = { id, { $inc: { applicants: 1 } } };
    const test = await db
      .collection('jobs')
      .updateOne({ _id: ObjectID(id) }, { $inc: { applicants: 1 } });
    res.status(204).json({ success: true, error: '' });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, error: error.message || error.toString() });
  }
};
