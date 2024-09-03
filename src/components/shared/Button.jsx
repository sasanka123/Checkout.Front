import PropTypes from "prop-types";

function Button({ children, type, isDisabled }) {
  console.log("btn");
  console.log(isDisabled);
  return (
    <button type={type} disabled={isDisabled}>
      {children}
    </button>
  );
}

// Button.defaultProps = {
//   type: "button",
//   isDisabled: false,
// };
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
export default Button;
