import EmojiResultRow from '../EmojiResultRow';

const EmojiNotFound = () => {
  return (
    <div className="component-emoji-not-found">
      <h1>Emojis not found</h1>
      <p>Try searching for something else</p>
    </div>
  );
};

const EmojiResults = ({ emojiData = [] }) => {
  return (
    <div className="component-emoji-results">
      {emojiData.length ? (
        emojiData.map((emojiData) => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))
      ) : (
        <EmojiNotFound />
      )}
    </div>
  );
};

export default EmojiResults;
