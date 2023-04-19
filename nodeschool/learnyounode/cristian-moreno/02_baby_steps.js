// const node = process.argv[0];
// const file = process.argv[1];
// const numbers = process.argv.slice(2);
let sum = 0;
for (let index = 2; index < process.argv.length; index++) {
  sum += Number(process.argv[index]);
}
console.log(sum);
