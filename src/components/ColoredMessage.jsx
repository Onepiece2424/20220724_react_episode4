export const ColoredMessage = (props) => {
  console.log(props);

  const constStyle = {
    color: "blue",
    fontSize: "20px"
  };

  return <p style={constStyle}>お元気ですか？</p>;
};
