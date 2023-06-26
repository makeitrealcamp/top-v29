import './style.css';

const SearchInput = ({ textChange }) => {
  const handleChange = (event) => {
    textChange(event);
  };

  return (
    <div className="component-search-input">
      <div>
        <input onChange={handleChange} data-cy="emoji-search-input" />
      </div>
    </div>
  );
};

export default SearchInput;
