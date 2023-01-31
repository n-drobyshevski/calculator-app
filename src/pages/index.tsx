import { type NextPage } from "next";
import Head from "next/head";
import Output from "../components/Output";
import BaseControls from "../components/BaseControls";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="calculator app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-neutral-800 pt-28">
        <div className="m-auto flex h-[36rem] w-[29rem] flex-col justify-around rounded-2xl bg-neutral-200 p-8">
          <Output />
          <BaseControls />
        </div>
      </main>
    </>
  );
};

export default Home;
