import "./Product.css";
import Price from "./Price";
function Product({ title, idx }) {
  let oldPrices = ["12,495", "93929", "45000", "90000"];
  let newPrices = ["12,000", "93000", "4501", "9001"];
  let discription = [
    ["good", "performance increase"],
    ["better", "speed increse"],["best", "efficiency"],
      ["excellent", "choice"]
    
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{discription[idx][0]}</p>
            <p>{discription[idx][1]}</p>


      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}
export default Product;
