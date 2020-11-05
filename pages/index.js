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
  const query = context.query.filter ? { category: context.query.filter } : {};
  const jobposts = await db.collection('jobs').find(query).toArray();

  return {
    props: {
      isConnected,
      jobposts: JSON.parse(JSON.stringify(jobposts)),
    },
  };
}
