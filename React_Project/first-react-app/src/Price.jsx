export default function Price({ oldPrice, newPrice }) {
  let styles = {
    backgroundColor: "#e0c367",
    display: "block",
    padding: "15px 15px",
    margin: "0",
    borderRadius: "0 0 15px 15px",
  };
  return (
    <p style={styles}>
      <s> {oldPrice} </s>&nbsp;&nbsp;&nbsp; <b>{newPrice}</b>
    </p>
  );
}
