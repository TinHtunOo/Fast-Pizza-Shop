import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getQuantityInCart } from "../cart/cartSlice";
import DeleteButton from "../../ui/DeleteButton";

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
};

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const quantityInCart = useSelector(getQuantityInCart(id));
  console.log(quantityInCart);
  const isInCart = quantityInCart > 0;
  console.log(isInCart);
  function handleAddtoCart() {
    const newItem = {
      pizzaID: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-zinc-700">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase text-zinc-500">Sold out</p>
          )}
          {isInCart && <DeleteButton pizzaID={id} />}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddtoCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
