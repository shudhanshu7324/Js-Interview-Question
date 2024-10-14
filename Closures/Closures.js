function outerFunc() {
  let count = 0;
  function innerFunc() {
    count++;
    return count;
  }
  return innerFunc;
}

const counter = outerFunc();
console.log(counter());
console.log(counter());
console.log(counter());
