import Candidate from './Candidate';
import { useVoting } from '../store';

const Candidates = () => {
  const { state } = useVoting();

  return (
    <div className="candidates-list">
      {state.candidates.map((candidate) => {
        return <Candidate key={candidate.id} candidate={candidate} />;
      })}
    </div>
  );
};

export default Candidates;
