function dividir (num1, num2) {
    if (num2 == 0) {
        return "Não é possível dividir por 0"
    } else {
       return num1/num2
    }
}

// console.log(dividir(3,0))

// console.log(dividir(3,2))
module.exports = dividir;