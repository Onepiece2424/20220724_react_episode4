//App関数の定義
//exportの記述で他のファイルでも使用できるようになる。
export const App = () => {
  const onClickButton = () => {
    alert();
  };

  const constStyle = {
    color: "blue",
    fontSize: "20px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={constStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
