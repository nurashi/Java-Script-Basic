// 1 Number

// const num = 42 //int
// const float = 42.25 //float 
// const pow = 10e3
// console.log('MAX_SAFE_INT', Number.MAX_SAFE_INTEGER)
// console.log('math pow 53', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INT', Number.MIN_SAFE_INTEGER)
// console.log('Max_Value', Number.MAX_VALUE)
// console.log('Min_Value', Number.MIN_VALUE)
// console.log('Pos Infinity', Number.POSITIVE_INFINITY)
// console.log('Neg Infinity', Number.NEGATIVE_INFINITY)
// console.log('2 / 0 =', 2 / 0)
// console.log(Number.NaN) //not a number 
// console.log(typeof NaN)
// console.log(2 / undefined)
// const  weird = 2 / undefined
// console.log(Number.isNaN(42))
// console.log(isFinite(Infinity))
// console.log(isFinite(42))

// const strInt = '40'
// const strFloat = '40.42'
// console.log(Number.parseInt(strInt) + 2)
// console.log(parseInt(strInt) + 2)
// console.log(+strInt+ + 2)

// console.log(parseFloat(strFloat) + 2) //parseFloat делает из строки int 
// console.log(+strFloat + 2 )



// console.log(0.4 + 0.2) // 0.6
// console.log((4 / 10) + (2 / 10))
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) //toFixed что бы регулировать на выходе числа которые после запятой

// 2 BigInt

// console.log(90071992547409919999999999999999n - 9007199254740991999999999999999n)
// console.log(-90071992547409919999999999999999n)
// console.log(90071992547409919999999999999999.2323n) //error цифры после запятой не могут принимать n(bigInt)

// console.log(10n - 4) //error 

// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n)  // 2

// 3 Math

console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25)) //sqrt тубыр асты
console.log(Math.pow(5, 3)) //pow первое число , вторая степень числа 
console.log(Math.abs(-42))
console.log(Math.max(42, 16 ,67, 89))
console.log(Math.min(42, 16 ,67, 89))
console.log(Math.floor(7.9))  //округляет в наиболее низшую сторону ответ:7
console.log(Math.ceil(7.3)) //округляет в наиболее высшию сторону ответ: 8
console.log(Math.round(4.5)) //возвращает число которое наиболее близко
console.log(Math.trunc(4.3)) //возвращает челую часть числа
console.log(Math.random())



// 4 Exemple 

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min)

}

console.log(getRandomBetween(10,42))




