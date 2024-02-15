// 1 Переменные 


// const firstName = 'Nurasyl'
// const Num1 = '6'

// 2 Мутирование 

// const age = 16 

// console.log('Имя человека: ' + firtName + ', а возрост: ' + age)

// alert('Имя человека: ' + firtName + ', а возрост: ' + age)

// const lastName = prompt('ввидте фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы 

// let currentYear = 2024
// const birthYear = 2007

// const age = currentYear - birthYear

// const a = 10
// const b = 5
// let c = 32
// // c = c + a
// // c = c - a 
// c += a
// c -= a

// console.log(a + b)
// console.log(a * b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Основные типы данных 
 
// const isProgrammer = true
// const name = 'Nurasyl'
// const age = 16
// let x 

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов 
// const fullAge = 16
// const birthYear = 2007
// const currentYear = 2024

// > < >= <=
// const  isFullAge = currentYear - birthYear >= fullAge // 16 >= 17
// console.log(isFullAge)

// 6 Условные операторы 

// const courseStatus = 'fail' // ready, fail, pending 

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов')
// } else if (courseStatus === 'pending') {
//     console.log('курс пока работает')
// } else {
//     console.log('курс не получился')
// }

// const isReady = false

// if (isReady) {
//     console.log('готово!')
// }else {
//     console.log('не готово!')
// }

// тернарное выражение 
// isReady ? console.log('good') : console.log('not good')
 
// const num1 = 42 // number
// const num2 = '42' // string 

// console.log(num1 === num2)

// 7 булевая логика 

// 8 функции

// function calculateAge(year) {
//     return 2024 - year
// }


// // console.log(calculateAge(2007))
// // console.log(calculateAge(2020))
// // console.log(calculateAge(1990))

// function logInfoAbout(name, year) {
//     const age  = calculateAge(year)
    
//     if (age > 0) {  

//     console.log('человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     }  else {
//         console.log('вообще то это будущие')
//     }}

// logInfoAbout('Nurasyl', 2007)
// logInfoAbout('Nurasyl1', 2025)

// 9 Массивы

// const cars = ['Mazda', 'Mersedes', 'Ford'] 
// // console.log(cars)

// // const  cars = new Array('Mazda', 'Mersedes', 'Ford') чем этор
// console.log(cars.length)

// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])

// cars[0] = 'Porsche'

// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 циклы

const cars = ['Mazda', 'Mersedes', 'Ford', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11 обьекты

// const  person = {
//     firstName: 'Nurasyl',
//     lastName: 'Orazbek',
//     year: 2007,
//     languages: ['Ru', 'kaz', 'Eng'],
//     hasDota: true,
//     great: function() {
//         console.log('great')
//     }
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key])
// person.hasDota = false
// console.log(person)
// person.isProgrammer = true
// console.log(person)
// person.great()





