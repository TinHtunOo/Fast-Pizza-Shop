import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

const className = "text-sm text-blue-500 hover:text-blue-800 hover:underline";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  if (to === "-1") {
    return (
      <Link className={className} onClick={() => navigate(-1)}>
        {children}
      </Link>
    );
  }
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
