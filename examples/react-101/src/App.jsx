import Button from './components/Button';
import AlbumList from './components/AlbumList';
import Album from './components/Album';

import './App.css'

const listAlbums = [
  {
    artist: 'The Beatles',
    song: 'Abbey Road',
    year: '1969',
    genre: 'Rock',
    cover: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
  },
  {
    artist: 'The Beatles',
    song: 'Abbey Road',
    year: '1969',
    genre: 'Rock',
    cover: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
  },
]

function App() {

  return (
    <div className="App">
      <h1>Vite + React</h1>
      {/* <Button /> */}

      <Button onHadleClick={() => console.log('Click!')}>
        Click me!
      </Button>

      <Button onHadleClick={() => console.log('Click!')}>
        <Album
          artist="The Beatles"
          song="Abbey Road"
          year="1969"
          genre="Rock"
          cover="https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
        />
      </Button>

    </div>
  )
}

export default App
