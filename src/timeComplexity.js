// Frog jumps D at a time. It needs to reach from X to Y.
// Find out how many D's the frog needs

function frogJump(x, y, d) {
    // validate for incorrect input

    if(y >= x && d < (y-x)) {
        // good input
        totalDistance = y - x;
        totalDs = totalDistance / d
        return Math.ceil(totalDs)
    }

    return undefined
}

result = frogJump(10, 85, 30)

function missingNumberInArray(arr) {

    // number is from 1 - N+1
    const N = arr.length + 1

    const sum = N * (N + 1)/2
    const actualSum = arr.reduce((acc, cur) => {
        return acc + cur
    }, 0)

    const missing = sum - actualSum

    return missing
}

result = missingNumberInArray([2,3,1,5,4,6,8])

function tapeEquilibrium(arr) {
    const total = arr.reduce((acc, next) => acc + next, 0)
    let leftTotal = 0
    let rightTotal = 0
    let min = Infinity

    for(let i=1; i<arr.length; i++) {
        leftTotal += arr[i-1]
        rightTotal = total - leftTotal

        leftTotal
        rightTotal

        const diff = Math.abs(leftTotal - rightTotal)
        if (diff < min) {
            min = diff
        }
    }
    return min
}

result = tapeEquilibrium([-3,-1,-2,4,3])


function isPermutation(arr) {
    let min = max = arr[0]
    let total = 0;
    const seen = []

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }
        if(arr[i] > max) {
            max = arr[i]
        }
        if(seen.includes(arr[i])) {
            return 
        }
        seen.push(arr[i])

        total += arr[i]
    }

    return max - min == arr.length - 1
}

result = isPermutation([4,1,3,2])
result