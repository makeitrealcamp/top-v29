import { useSelector } from '../store';

const Badge = () => {
  const { cart } = useSelector();
  const amountItems = cart.length;

  return <span className="badge">{amountItems}</span>;
};

export default Badge;
