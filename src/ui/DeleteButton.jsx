import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../features/cart/cartSlice";
import PropTypes from "prop-types";

DeleteButton.propTypes = { pizzaID: PropTypes.number.isRequired };

function DeleteButton({ pizzaID }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(pizzaID));
  }
  return (
    <Button onClick={handleDelete} type="small">
      Delete
    </Button>
  );
}

export default DeleteButton;
