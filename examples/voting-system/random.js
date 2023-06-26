const makers = ['David Sarria', 'Juan David Peña'];

function getRandomMaker() {
  const index = Math.floor(Math.random() * makers.length);
  return makers[index];
}

console.log(getRandomMaker());
