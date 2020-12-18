import Head from 'next/head';
import { connectToDatabase } from '../util/mongodb';
import { NewsletterEmailBar } from '../components/NewsletterEmailBar';
import { JobPostsList } from '../components/JobPostsList/JobPostsList';

export default function Home({ isConnected, jobposts }) {
  return (
    <main>
      {isConnected && (
        <>
          <NewsletterEmailBar />
          <JobPostsList jobposts={jobposts} />
        </>
      )}
    </main>
  );
}

export async function getServerSideProps(context) {
  const { client, db } = await connectToDatabase();

  const isConnected = await client.isConnected(); // Returns true or false
  let jobposts;
  console.log('context.query', context.query);
  console.log('context.query.filter', context.query.filter);

  // get jobposts based on filters
  if (context.query.filter) {
    jobposts = await db
      .collection('jobs')
      .find({ category: context.query.filter })
      .toArray();

    return {
      props: {
        isConnected,
        jobposts: JSON.parse(JSON.stringify(jobposts)),
      },
    };
  }

  // get jobposts based on tags
  if (context.query.tags) {
    const tags = context.query.tags.split(','); // i.e. ['support', 'commercial']
    const formattedQuery = tags.reduce((acc, value) => {
      const query = { tags: { $in: [`${value}`] } }; // i.e. { tags: { $in: ['support'] } }
      acc.push(query);
      return acc;
    }, []);

    jobposts = await db
      .collection('jobs')
      .find({
        $and: formattedQuery,
      })
      .toArray();

    return {
      props: {
        isConnected,
        jobposts: JSON.parse(JSON.stringify(jobposts)),
      },
    };
  }

  // get all jobposts
  jobposts = await db.collection('jobs').find({}).toArray();

  return {
    props: {
      isConnected,
      jobposts: JSON.parse(JSON.stringify(jobposts)),
    },
  };
}
