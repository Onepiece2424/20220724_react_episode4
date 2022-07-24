//stateをimportする。
import { useState } from "react";

//ColordMessageをimportする。
import { ColoredMessage } from "./components/ColoredMessage";

//App関数の定義
//exportの記述で他のファイルでも使用できるようになる。
export const App = () => {
  console.log("レンダリング");

  //Stateの定義
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    // setNum(num + 1);
    setNum((num) => num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">"元気です！"</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
