//ColordMessageをimportする。
import { ColoredMessage } from "./components/ColoredMessage";

//App関数の定義
//exportの記述で他のファイルでも使用できるようになる。
export const App = () => {
  const onClickButton = () => {
    alert();
  };

  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentPinkStyle}>元気です！</p>
      <ColoredMessage />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
