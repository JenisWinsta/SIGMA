import Desc from "./Desc";
import Price from "./Price";

import "./Product.css";

export default function Product({title,idx}) {
    let fea1=["8000 DPI","Intuitive Touch Surface","Designed for iPad Pro", "Wireless Mouse 2.4GHz"];
    let fea2=["5 Programmable Buttons","Designed for iPad Pro","Intuitive Touch Surface","Optical Orientation"];
    let oldPrice=["12,495","11,900","1,599","599"];
    let newPrice=["8,999","9,199","899","278"];

  return (
    <>
    <div className="Product">
      <Desc title={title} fea1={fea1[idx]} fea2={fea2[idx]}/>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>

    </>
  );
}
