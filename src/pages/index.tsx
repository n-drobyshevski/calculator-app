import { type NextPage } from "next";
import Head from "next/head";
import Output from "../components/Output";
import BaseControls from "../components/BaseControls";
import { useEffect, useState } from "react";
import NavControls from "../components/NavControls";

import calculate from "../api/eval";

const Home: NextPage = () => {
  const [output, setOutput] = useState<{ before: string[]; after: string[] }>({
    before: [],
    after: [],
  });
  const [prevResult, setPrevResult] = useState<string>("");
  const [history, setHistory] = useState<
    { expression: string; result: string }[]
  >([]);

  useEffect(() => {
    console.log(output);
  }, [output]);

  const outputUpdateHandler = (newChar: string) => {
    setOutput((currOutput) => {
      return {
        before: currOutput.before.concat([newChar]),
        after: currOutput.after,
      };
    });
  };

  const onDeleteHandler = () => {
    setOutput((currOutput) => {
      return {
        before: currOutput.before.slice(0, -1),
        after: currOutput.after,
      };
    });
  };

  const onGetAnswerHandler = () => {
    setOutput((currOutput) => {
      return {
        before: [...currOutput.before, prevResult],
        after: currOutput.after,
      };
    });
  };

  const moveCursorLeft = () => {
    const char: string | undefined = output.before[output.before.length - 1];
    console.log("left", typeof char);
    if (typeof char === "string") {
      setOutput((currOutput) => {
        return {
          after: [char, ...currOutput.after],
          before: currOutput.before.slice(0, -1),
        };
      });
    }
  };

  const moveCursorRight = () => {
    const char: string | undefined = output.after[0];
    console.log("right", typeof char);
    if (typeof char === "string") {
      setOutput((currOutput) => {
        return {
          before: [...currOutput.before, char],
          after: currOutput.after.slice(1),
        };
      });
    }
  };

  const onExecuteHandler = () => {
    console.log("calculate");
    const expression: string = output.before.join("") + output.after.join();
    const result = calculate(expression);
    setPrevResult(String(result));
    setOutput({ before: String(result).split(""), after: [] });
    setHistory([...history, { expression: expression, result: `${result}` }]);
  };
  return (
    <>
      <Head>
        <title>Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-neutral-800 pt-28">
        <div className="m-auto flex h-[36rem] w-fit flex-col justify-between rounded-2xl bg-neutral-200 p-8">
          <Output output={output} history={history} />
          <NavControls
            onLeftClick={moveCursorLeft}
            onRightClick={moveCursorRight}
          />
          <BaseControls
            onExecute={onExecuteHandler}
            onGetAnswer={onGetAnswerHandler}
            onDelete={onDeleteHandler}
            onInput={outputUpdateHandler}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
