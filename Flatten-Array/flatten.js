const arr = [1, 2, [3, 4], [4], [2, 5,[ 8, 7]]];

// flat with array.flat
// const flattenArr = arr.flat(Infinity);
// console.log(flattenArr)

// flat using reduce method
const flatten = arr.reduce((acc, curr) => acc.concat(curr), []);

console.log(flatten);


// for multi level using reduce + recursion
const arr = [1, 2, [3, 4], [5, [6, 7, [8, 9]]]];

function flattenArray(arr) {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(flattenArray(curr));
        }
        return acc.concat(curr);
    }, []);
}

console.log(flattenArray(arr));