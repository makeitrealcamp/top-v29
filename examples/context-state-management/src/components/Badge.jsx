import { useAppState } from '../store';

const Badge = () => {
  const { state } = useAppState();
  const amountItems = state.cart.length;

  return <span className="badge">{amountItems}</span>;
};

export default Badge;
