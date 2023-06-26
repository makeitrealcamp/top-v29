import { useVoting } from '../store';

const Results = () => {
  const { state } = useVoting();
  return (
    <div className="results">
      <ul>
        {state.candidates.map((candidate) => {
          return (
            <li key={candidate.id}>
              <span>{candidate.name}: </span>
              <strong>
                {state.resultType === 'percentage'
                  ? `${candidate.percentage.toFixed(2)}%`
                  : candidate.votes}
              </strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Results;
