function multiplicar (num1, num2) {
    if (num2 == 0 || num1 == 0) {
        return 0
    } else {
       return num1 * num2
    }
}

// console.log(multiplicar(3,0))

// console.log(multiplicar (3,2))
module.exports = multiplicar;
