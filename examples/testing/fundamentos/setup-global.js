function expect(actual) {
  return {
    toBe(expected) {
      if(actual !== expected) {
        throw new Error(`${actual} is not equeal to ${expected}`)
      }
    }
  }
}

function test(title, callback) {
  try {
    callback()
    console.log(`✅ ${title}`);
  } catch(error) {
    console.log(`❌ ${title}`);
    console.log(error);
  }
}

global.expect = expect
global.test = test