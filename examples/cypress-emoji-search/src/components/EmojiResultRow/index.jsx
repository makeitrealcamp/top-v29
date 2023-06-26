import './style.css';

const EmojiResultRow = ({ symbol, title }) => {
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  return (
    <div
      className="emoji-result-row copy-to-clipboard"
      data-clipboard-text={symbol}
      data-cy="emoji-row"
    >
      <img alt={title} src={src} />
      <span className="title">{title}</span>
      <span className="info">Click to copy emoji</span>
    </div>
  );
};

export default EmojiResultRow;
