//App関数の定義
//exportの記述で他のファイルでも使用できるようになる。
export const App = () => {
  const onClickButton = () => {
    alert();
  };
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
