import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number,
    name: PropTypes.string,
    totalPrice: PropTypes.number,
  }).isRequired,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.arrayOf(PropTypes.string),
};
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  return (
    <li className="py-3">
      <div className="flex items-center justify-between">
        <p className="text-zinc-700">
          <span className="font-semibold text-zinc-800">{quantity}&times;</span>{" "}
          {name}
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-zinc-600">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
