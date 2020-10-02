import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";
import { JobPostsList } from "../components/JobPostsList";

export default function Home({ isConnected, jobs }) {
  console.log("jobs", jobs);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{isConnected && <JobPostsList jobs={jobs} />}</main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { client, db } = await connectToDatabase();

  const isConnected = await client.isConnected(); // Returns true or false

  const jobs = await db.collection("jobs").find({}).toArray();

  return {
    props: { isConnected, jobs: JSON.parse(JSON.stringify(jobs)) },
  };
}
