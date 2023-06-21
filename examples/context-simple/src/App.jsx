// import { useTheme } from './components/Theme/ThemeContext';

// import Form from './components/common/Forms';
import CounterAdv from './components/CounterAdv/Counter';

import './App.css';

function App() {
  // const { theme, setTheme } = useTheme();

  // const toggleTheme = () => {
  //   // if es light -> dark
  //   // if es dark -> light

  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };

  return (
    <>
      <h1>React Context App</h1>
      <CounterAdv />
      {/* <div>
        <Form />
        <label>
          <input
            type="checkbox"
            checked={ theme === 'dark' }
            onChange={toggleTheme}
          />
          Usar modo { theme === 'dark' ? 'light' : 'dark'}
        </label>
      </div> */}
    </>
  );
}

export default App;
