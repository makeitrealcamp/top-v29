

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

async function main() {
  const episodes = await getAllEpisodes();
  // const charactersSet = new Set()

  // episodes.forEach(episode => {
  //   // 10 characters
  //   episode.characters.slice(0, 10).forEach(characterUrl => {
  //     charactersSet.add(characterUrl);
  //   });
  // });

  // const promiseCharacters = [];
  // for (const url of charactersSet) {
  //   promiseCharacters.push(getCharacterInfo(url));
  // }
  // const characters = await Promise.all(promiseCharacters);

  // const characters =  episodes.map((episode) => {
  //   // 10 characters
  //   return episode.characters.slice(0, 10);
  // })


  // const characters = []
  // episodes.forEach(item => {
  //   characters.push(...item.characters.slice(0, 10))
  // });
  // const characterPromise = characters.map((url) => {
  //   return getCharacterInfo(url);
  // });
  // const result = await Promise.all(characterPromise)

  const characters = episodes.reduce((acc, item) => {
    return [...acc, ...item.characters.slice(0, 10)]
  }, [])

  const characterPromise = characters.map((url) => {
    return getCharacterInfo(url);
  });
  const result = await Promise.all(characterPromise)

  const data = episodes.map((episode) => {
    return {
      title: `${episode.name} - ${episode.episode}`,
      dateToAir: episode.air_date,
      characters: episode.characters.slice(0, 10).map((url) => {
        return result.find((item) => item.url === url)
      })
    }
  });

  return data
}

main();
