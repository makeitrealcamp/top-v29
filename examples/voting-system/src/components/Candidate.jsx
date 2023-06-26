import { useVoting } from '../store';

const Candidate = ({ candidate }) => {
  const { dispatch } = useVoting();

  const handleClickVote = (id) => {
    console.log(id);

    dispatch({ type: 'ADD_VOTE', payload: id });
  };

  return (
    <div className="candidate">
      <button type="button" onClick={() => handleClickVote(candidate.id)}>
        {candidate.name}
      </button>
    </div>
  );
};

export default Candidate;
