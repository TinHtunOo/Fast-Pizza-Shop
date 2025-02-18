import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
import PropTypes from "prop-types";

UpdateQuantityButton.propTypes = {
  pizzaId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

function UpdateQuantityButton({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-3">
      <Button onClick={() => dispatch(decreaseQuantity(pizzaId))} type="round">
        -
      </Button>
      <span className="font-semibold">{quantity}</span>
      <Button onClick={() => dispatch(increaseQuantity(pizzaId))} type="round">
        +
      </Button>
    </div>
  );
}

export default UpdateQuantityButton;
