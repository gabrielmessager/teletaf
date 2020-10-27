import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";
import { NewsletterEmailBar } from "../components/NewsletterEmailBar";
import { JobPostsList } from "../components/JobPostsList";

export default function Home({ isConnected, jobs }) {
  console.log("jobs", jobs);
  console.log("MAILCHIMP_KEY", process.env.MAILCHIMP_API_KEY);
  return (
    <main>
      {isConnected && (
        <>
          <NewsletterEmailBar />
          <JobPostsList jobs={jobs} />
        </>
      )}
    </main>
  );
}

export async function getServerSideProps(context) {
  const { client, db } = await connectToDatabase();

  const isConnected = await client.isConnected(); // Returns true or false

  const jobs = await db.collection("jobs").find({}).toArray();

  return {
    props: {
      isConnected,
      jobs: JSON.parse(JSON.stringify(jobs)),
    },
  };
}
