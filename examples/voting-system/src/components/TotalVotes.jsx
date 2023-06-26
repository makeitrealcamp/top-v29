import { useVoting } from '../store';

const TotalVotes = () => {
  const { state } = useVoting();

  return (
    <div className="total">
      Total Votes: <strong>{state.totalVotes}</strong>
    </div>
  );
};

export default TotalVotes;
