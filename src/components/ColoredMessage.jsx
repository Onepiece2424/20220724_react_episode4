export const ColoredMessage = (props) => {
  const { color, children } = props;
  const constStyle = {
    color,
    fontSize: "20px"
  };

  return <p style={constStyle}>{children}</p>;
};
