import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
import { Link } from "react-router-dom";

function CartOverview() {
  const quantity = useSelector(getTotalQuantity);

  const totalPrice = useSelector(getTotalPrice);
  if (!quantity) return null;

  return (
    <div className="flex items-center justify-between bg-zinc-800 p-4 text-base text-zinc-200 sm:text-lg">
      <p className="space-x-4">
        <span>{quantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
