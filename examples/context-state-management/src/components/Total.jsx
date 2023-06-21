const Total = () => {
  return (
    <div className="shopping-cart-total">
      <span className="lighter-text">Total:</span>
      <span className="main-color-text">
        ${Intl.NumberFormat('en-US').format(0)}
      </span>
    </div>
  );
};

export default Total;
