import EmojiResultRow from '../EmojiResultRow';

const EmojiResults = ({ emojiData = [] }) => {
  return (
    <div className="component-emoji-results">
      {emojiData.map((emojiData) => (
        <EmojiResultRow
          key={emojiData.title}
          symbol={emojiData.symbol}
          title={emojiData.title}
        />
      ))}
    </div>
  );
};

export default EmojiResults;
