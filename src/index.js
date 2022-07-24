//ReactDOMモジュールのインポート
import ReactDOM from "react-dom";

//App関数の定義
const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

//引数の設定
ReactDOM.render(<App />, document.getElementById("root"));
