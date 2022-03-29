// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// // 1 EUR (Euro) = 1.2 USD (US Dollar)

// fromDollarToYen

// fromEuroToDollar 

// fromYanToPound

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = ((valueInDollar/oneEuroIs.USD) *oneEuroIs.JPY);
    // retornamos el valor
    return valueInYen;
}


const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound =  (valueInYen * (oneEuroIs.GBP/oneEuroIs.JPY))
    return Math.round(valueInPound);
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }