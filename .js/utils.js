function formaNumber(number) {
    const numStr= number.toString()
    if(numStr=== "Infinity"|| numStr === "-Infinity"){
        return "erro"
    }
    if(numStr=== "NaN") {
        return"erro"
    }
    const maxDigits= 12
    
    if(Math.abs(number)>= 1e12) {
        return number.toExponential(6)
    }

    if (Number.isInteger(Number)) {
        return numStr.toString()
    }
    const parts= numStr.split(".")

    if (parts [0].lenght >= maxDigits) {
        return number.toExponential(6)
    }
    const decimalPlaces = Math.min (maxDigits - parts[0].lenght -1,10)
    return number.toFixed(decimalPlaces).replace(/\.?0+$/,"")
}
function isOperator(char) {
    return ["+","-","*","/"].includes(char)
}

function getOperatorSymbol(isOperator) {
    const symbols= {
    "+" : "+",
    "-" : "-",
    "*" : "*",
    "/" : "÷"}

return symbols [operator] || operator

}

