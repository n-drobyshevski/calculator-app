import { type NextPage } from "next";
import Head from "next/head";
import Output from "../components/Output";
import BaseControls from "../components/BaseControls";
import { useEffect, useState } from "react";
import NavControls from "../components/NavControls";

import calculate from "../api/eval";

export interface FocusedItemType {
  index: number;
  result: boolean;
  expression: boolean;
}

interface HistoryEntryType {
  expression: string;
  result: string;
}
interface HistoryType {
  visible: HistoryEntryType[];
  invisible: HistoryEntryType[];
}

const Home: NextPage = () => {
  const [output, setOutput] = useState<{ before: string[]; after: string[] }>({
    before: [],
    after: [],
  });
  const [prevResult, setPrevResult] = useState<string>("");
  const [history, setHistory] = useState<HistoryType>({
    visible: [],
    invisible: [],
  });

  const [focusedItem, setFocusedItem] = useState<FocusedItemType>({
    index: -1,
    result: false,
    expression: false,
  });

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

  const moveLeftHandler = () => {
    if (focusedItem.index === -1) {
      moveCursorLeft();
    } else {
      if (focusedItem.expression === true) {
        return;
      } else {
        setFocusedItem({
          index: focusedItem.index,
          result: false,
          expression: true,
        });
      }
    }
  };
  const moveRightHandler = () => {
    if (focusedItem.index === -1) {
      moveCursorRight();
    } else {
      if (focusedItem.result === true) {
        return;
      } else {
        setFocusedItem({
          index: focusedItem.index,
          result: true,
          expression: false,
        });
      }
    }
  };

  const moveUpHandler = () => {
    if (
      history.visible.length === 0 ||
      typeof history.visible[focusedItem.index + 1] === "undefined"
    ) {
      return;
    } else {
      // scroll simulation\
      console.log("focus", history, focusedItem);
      if (history.visible.length > 2 && focusedItem.index + 1 > 1) {
        console.log("scroll up");
        let invisible: HistoryEntryType[] = [];
        if (
          typeof history.invisible !== "undefined" &&
          typeof history.visible[0] !== "undefined"
        ) {
          invisible = [...history.invisible, history.visible[0]];
        }
        setHistory({
          visible: history.visible.slice(1),
          invisible: invisible,
        });
      } else {
        setFocusedItem({
          index: focusedItem.index + 1,
          result: true,
          expression: false,
        });
      }
    }
  };

  const moveDownHandler = () => {
    if (focusedItem.index === -1) {
      return;
    } else {
      // scroll simulation\
      console.log("focus", history, focusedItem);

      if (history.invisible.length > 0) {
        console.log("scroll down");

        //update visible part
        let updatedVisible: HistoryEntryType[] = [];
        const lastInvisible = history.invisible[history.invisible.length - 1];
        if (typeof lastInvisible !== "undefined") {
          updatedVisible = [lastInvisible, ...history.visible];
        }

        // updated Invisible part
        let updatedInvisible: HistoryEntryType[] = [];
        if (history.invisible.length === 1) {
          updatedInvisible = [];
        } else if (history.invisible.length > 1) {
          updatedInvisible = history.invisible.slice(-1);
        }

        console.log("upatedVisible", updatedVisible);
        console.log("upatedInvisible", updatedInvisible);
        setHistory({
          visible: updatedVisible,
          invisible: updatedInvisible,
        });

        // set focus to result part
        setFocusedItem({
          index: focusedItem.index,
          result: true,
          expression: false,
        });
        
      } else {
        setFocusedItem({
          index: focusedItem.index - 1,
          result: true,
          expression: false,
        });
      }
    }
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
    setHistory({
      visible: [
        { expression: expression, result: `${result}` },
        ...history.visible,
      ],
      invisible: history.invisible,
    });
  };
  return (
    <>
      <Head>
        <title>Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-neutral-800 pt-28">
        <div className="m-auto flex h-[36rem] w-fit flex-col justify-between rounded-2xl bg-neutral-200 p-8">
          <Output
            output={output}
            history={history.visible}
            focusedItem={focusedItem}
          />
          <NavControls
            onLeftClick={moveLeftHandler}
            onUpClick={moveUpHandler}
            onDownClick={moveDownHandler}
            onRightClick={moveRightHandler}
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
