//ColordMessageをimportする。
import { ColoredMessage } from "./components/ColoredMessage";

//App関数の定義
//exportの記述で他のファイルでも使用できるようになる。
export const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">"元気です！"</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
