// array of 1 to 10^9. write efficient algo
// each element is repeated once. There is only one element which is not repeated
// Use XOR n ^ 0 = n and n ^ n = 0
// And the order in which you XOR elements of an array does not matter. n1 ^ n2 ^ n3 = n3 ^ n1 ^ n2

function oddOccurencesInArray(arr) {
    const len = arr.len
    if(len % 2 === 0) {
        return undefined
    }

    reduced = arr.reduce((acc, next) => {
        console.log(acc)
        console.log(next)
        return (next ^ acc)
    }, 0)

    return reduced
}

let result = oddOccurencesInArray([9,3,9,3,9,7,9])