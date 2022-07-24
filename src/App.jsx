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
      <ColoredMessage color="blue" message="お元気ですか？" />
      <ColoredMessage color="pink" message="元気です！" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
