
import { useEffect, useState } from 'react'


async function getAllEpisodes() {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await response.json();
  return data.results;
}

async function getCharacterInfo(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getData() {
  const episodes = await getAllEpisodes();

  const characters = episodes.reduce((acc, item) => {
    return [...acc, ...item.characters.slice(0, 10)]
  }, [])

  const characterPromise = characters.map((url) => {
    return getCharacterInfo(url);
  });
  const result = await Promise.all(characterPromise)

  const data = episodes.map((episode) => {
    return {
      id: episode.episode,
      title: `${episode.name} - ${episode.episode}`,
      dateToAir: episode.air_date,
      characters: episode.characters.slice(0, 10).map((url) => {
        return result.find((item) => item.url === url)
      })
    }
  });

  return data
}

const RickMorty = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData().then((data) => {
      setData(data)
    })
  }, []);

  return(
    <div>
      <h1>Rick and Morty</h1>
      <br />
      <ul>
        {
          data.map((item) => (
            <li key={item.id}>
              <p><strong>Title:</strong> {item.title}</p>
              <p><strong>Date to Air:</strong> {item.dateToAir}</p>
              <p>
                <strong>Characters:</strong>
                <ol>
                  {
                    item.characters.map((character) => (
                      <li key={character.id}>
                        <p><strong>Name:</strong> {character.name}</p>
                        <p><strong>Specie:</strong> {character.species}</p>
                      </li>
                    ))
                  }
                </ol>
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default RickMorty
