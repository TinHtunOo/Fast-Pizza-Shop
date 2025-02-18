import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
import DeleteButton from "../../ui/DeleteButton";
import UpdateQuantityButton from "./UpdateQuantityButton";
CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-2 sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-medium">{formatCurrency(totalPrice)}</p>
        <UpdateQuantityButton pizzaId={pizzaId} quantity={quantity} />
        <DeleteButton pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
