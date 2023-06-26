import { useVoting } from '../store';

const Config = () => {
  const { state, dispatch } = useVoting();

  const handleChange = ({ target }) => {
    const { value } = target;

    dispatch({ type: 'CHANGE_RESULT_TYPE', payload: value });
  };

  return (
    <div className="filters">
      <label htmlFor="percentage" className="filters__item">
        <input
          type="radio"
          value="percentage"
          id="percentage"
          name="type"
          onChange={handleChange}
          checked={state.resultType === 'percentage'}
        />
        <span>Percentage</span>
      </label>
      <label htmlFor="total" className="filters__item">
        <input
          type="radio"
          value="total"
          id="total"
          name="type"
          onChange={handleChange}
          checked={state.resultType === 'total'}
        />
        <span>Total</span>
      </label>
    </div>
  );
};

export default Config;
