import { type NextPage } from "next";
import Head from "next/head";
import Output from "../components/Output";
import BaseControls from "../components/BaseControls";
import { useState } from "react";

const Home: NextPage = () => {
  const [output, setOutput] = useState<string[]>([""]);

  const outputUpdateHandler = (newChar: string) => {
    setOutput((currOutput) => {
      return currOutput.concat([newChar]);
    });
  };

  const onDeleteHandler = () => {
    setOutput((currOutput) => {
      return currOutput.slice(0, -1);
    });
  };
  return (
    <>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="calculator app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-neutral-800 pt-28">
        <div className="m-auto flex h-[36rem] w-[29rem] flex-col justify-between rounded-2xl bg-neutral-200 p-8">
          <Output output={output} />
          <BaseControls
            onDelete={onDeleteHandler}
            onInput={outputUpdateHandler}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
