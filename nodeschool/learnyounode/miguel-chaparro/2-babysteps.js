let numb = 0;
for (let i = 2; i < process.argv.length; i++) {
  numb += Number(process.argv[i]);
}
console.log(numb)