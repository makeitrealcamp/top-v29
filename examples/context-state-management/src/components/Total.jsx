import { useAppState } from '../store';

const Total = () => {
  const { state } = useAppState();
  return (
    <div className="shopping-cart-total">
      <span className="lighter-text">Total:</span>
      <span className="main-color-text">
        ${Intl.NumberFormat('en-US').format(state.total)}
      </span>
    </div>
  );
};

export default Total;
