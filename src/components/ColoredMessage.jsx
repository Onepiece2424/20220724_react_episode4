export const ColoredMessage = ({ color, children }) => {
  const constStyle = {
    color,
    fontSize: "20px"
  };

  return <p style={constStyle}>{children}</p>;
};
