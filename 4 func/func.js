// 1 Функции
// Function Declaration

// function greet(name) {
//    console.log('hello! -', name)

// }

// Function Expression

// const  greet2 = function greet2(name) {
//    console.log('hello2 -', name)

// }

// greet('Nurasyl')
// greet2('Nurasyl')

// console.dir(greet)  // dir - позволяет посмотреть все тонкости функции


// 2 Анонимные функции

// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval)
        
//     } else{
//         console.log(++counter)
//     }
    
// }, 1000)

// 3 Стрелечные функции

// function greet(name) {
//     console.log('hello! -', name)
// }

// const arrow = (name) => {
//     console.log('hello! -', name)
// }


// const arrow2 = name => console.log('hello! -', name)
// arrow('Nurasyl')
// arrow2('Nur')


// const pow2 = num => {
//     return num**2
// }

// console.log(pow2(4))


// 4 Параметры по умолчанию 


// const sum = (a = 40 ,b = a * 10) => a + b

// console.log(sum(4))

// function sumAll (...all) {          //all - massive
    
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1,2,3,4,5)
// console.log(res)


// 5 замыкание 


function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWitgLastName = createMember('Nurasyl')

console.log(logWitgLastName(' Nurasyl'))
console.log(logWitgLastName(' Orazbek'))







