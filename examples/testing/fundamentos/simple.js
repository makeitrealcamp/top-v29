const sum = (a, b) => a - b
const substract = (a, b) => a - b



function validateSum(){
  const expected = 3
  const result = substract(1, 2)  

  if(result === expected) {
    console.log('Test passed');
  }
}


let expected, result

expected = 10
result = sum(3, 7)
if(result !== expected) {
  throw new Error(`${result} is not equeal to ${expected}`)
}

expected = 4
result = substract(7, 3)
if(result !== expected) {
  throw new Error(`${result} is not equeal to ${expected}`)
}