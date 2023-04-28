const makersName = [
  'Andres López',
  'David Sarria Villada',
  'Alexander Herrera',
  'Juan Xavier Cabello Salirrosas',
  'Federico Córdoba',
  'Juan David Peña',
  'Michael Gonzalez',
  'Miguel Angel Chaparro Tirado',
  'Carlos Alfredo Mendoza Páez',
];

function randomMaker() {
  return makersName[Math.floor(Math.random() * makersName.length)];
}

console.log('El turno es para: ', randomMaker());
