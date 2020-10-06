import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";
import { NewsletterEmailBar } from "../components/NewsletterEmailBar";
import { JobPostsList } from "../components/JobPostsList";

export default function Home({ isConnected, jobs }) {
  console.log("jobs", jobs);
  return (
    <div className="container">
      <Head>
        <title>Télétaf</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        {isConnected && (
          <>
            <NewsletterEmailBar />
            <JobPostsList jobs={jobs} />
          </>
        )}
      </main>
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
