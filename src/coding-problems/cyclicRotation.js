function rotate(arr, times) {
    if (times <= 0) {
        return arr
    }
    const copy = [...arr]

}

// take last move to first, new position
function rotate(arr) {
    const copy = [...arr]
    for (let i = 0; i < arr.length; i++) {
        if (i == (arr.length - 1)) {
            copy[0] = arr[arr.length - 1]
            return copy
        }
        copy[i + 1] = arr[i]
    }

    return copy
}

const r = rotate([1, 2, 3, 4, 5])