import { useState } from 'react';

import Header from './components/Header';
import SearchInput from './components/SearchInput';
import EmojiResults from './components/EmojiResults';
import filterEmoji from './filterEmoji';

import './App.css';

function App() {
  const [emojis, setEmojis] = useState(filterEmoji('', 20));

  const handleSearchChange = (event) => {
    setEmojis(filterEmoji(event.target.value, 20));
  };

  return (
    <div>
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <EmojiResults emojiData={emojis} />
    </div>
  );
}

export default App;
