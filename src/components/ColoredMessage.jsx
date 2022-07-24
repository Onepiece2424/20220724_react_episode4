export const ColoredMessage = (props) => {
  console.log(props);

  const constStyle = {
    color: props.color,
    fontSize: "20px"
  };

  return <p style={constStyle}>{props.children}</p>;
};
