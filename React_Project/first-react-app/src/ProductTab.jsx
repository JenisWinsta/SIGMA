import Product from "./Product";

function ProductTab() {
  return (
    <>
      <h2>Blockbuster Deals on Computer Accessories | Shop Now</h2>
      <div className="ProductTab">
        <Product title="Logitech MX Master" idx={0} />
        <Product title="Apple Pencil (2nd Gen)" idx={1} />
        <Product title="Zebronics Zeb-transformer" idx={2} />
        <Product title="Petronics Toad 23" idx={3} />
      </div>
    </>
  );
}

export default ProductTab;
