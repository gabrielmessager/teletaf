// import mailchimp from '@mailchimp/mailchimp_marketing';
import { connectToDatabase } from '../../util/mongodb';
import { ObjectID } from 'mongodb';

export default async (req, res) => {
  try {
    const { id } = req.body;
    // const response = await subscribeEmail(email);
    // res.status(201).json({ success: true, error: '' });
    const { db } = await connectToDatabase();

    // const query = { id, { $inc: { applicants: 1 } } };
    await db
      .collection('jobs')
      .updateOne({ _id: ObjectID(id) }, { $inc: { applicants: 1 } });

    res.status(204).json({ success: true, error: '' });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, error: error.message || error.toString() });
  }
};
