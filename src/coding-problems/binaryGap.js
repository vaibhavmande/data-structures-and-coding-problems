function toBinary(num) {
    if (num == 0) {
        return 0
    }

    let binary = ""
    let decimal = Math.floor(num);
    while (decimal > 0) {
        const rem = decimal % 2
        decimal = Math.floor(decimal / 2)
        binary = String(rem) + binary
    }

    return binary
}

function binaryGap(binary) {
    if (binary.length <= 2) {
        return 0
    }

    const first = binary.search("1")
    let result = []
    for (let i = first + 1; i <= binary.length; i++) {
        if (binary[i] == 1) {
            return result.length
        }
        if (binary[i] == 0) {
            result.push(binary[i])
        }
    }

    return 0
}