import { useSelector } from 'react-redux';

const Badge = () => {
  const amountItems = useSelector((state) => state.cart.items.length);

  return <span className="badge">{amountItems}</span>;
};

export default Badge;
