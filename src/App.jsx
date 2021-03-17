import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("saisho");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // numが変化したときだけこの処理を走らせる
  // []なにもなしのときは最初だけ走る
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // 左側がfalseなら右側を返す
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // 左側がtrueなら右側を返す
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps: off
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">How are you doing?</ColorfulMessage>
      <ColorfulMessage color="pink">Good!</ColorfulMessage>
      <button onClick={onClickCountUp}>Count Up</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^-^)</p>}
    </>
  );
};

export default App;
