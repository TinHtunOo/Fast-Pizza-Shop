import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
};

const base =
  "rounded-full bg-red-800  uppercase tracking-wide text-zinc-100 transition-colors duration-300 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring focus:ring-red-600 focus:ring-offset-2 disabled:cursor-not-allowed";

const styles = {
  primary: base + " md:px-5 md:py-3 px-4 py-2  text-sm md:text-lg ",
  small: base + " px-4 py-2 text-xs",
  secondary:
    " border border-zinc-800 rounded-full uppercase tracking-wide text-zinc-800 transition-colors duration-300 hover:bg-zinc-300 focus:bg-zinc-200 focus:outline-none focus:ring focus:ring-zinc-600 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-3 px-4 py-2 text-sm md:text-lg ",
};

function Button({ children, disabled, to, type }) {
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
