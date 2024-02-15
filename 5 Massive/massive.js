const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']
const fib = [1, 1, 2, 3, 5, 8, 13]
// const people = [
//     {name: 'Nurasyl', budget: 5000},
//     {name: 'Nurasyl2', budget: 4200},
//     {name: 'Nurasyl3', budget: 6500}
// ]

// function
function addItemToEnd() {

}


// method
// cars.push('Reno')

// cars.unshift('lada')
// console.log(cars)

// const firstItem = cars.shift()
// const lastCar = cars.pop()
// console.log(firstItem)
// console.log(cars)
// console.log(lastCar)

// const index = cars.indexOf('BMW')

// cars[index] = 'dota'
// console.log(cars)

// let findedPerson
// for (const person of people) {
    
//     if (person.budget === 6500) {
//         findedPerson = person
//     }
// }


// console.log(findedPerson)


// const index = people.findIndex(function(person){
//     return person.budget === 4200
// })
// const person = people.find(function(person){
//      return person.budget === 4200
// })

// console.log(person)


// console.log(cars.reverse())
// console.log(cars)

// Задача 1

// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')

// console.log(reverseText)


// console.log(cars.includes('Mazda'))  // includes - проверяет есть ли заданное 'x' в массиве
 

// const upperCasecars = cars.map(car => {
//     return car.toUpperCase()
// })

// console.log(upperCasecars)
// console.log(cars)

// const pow2Fib = fib.map(num => num**2) //с помощью стрелочных функции возводиться в квадрат все цифры в массиве fib[]

// console.log(pow2Fib)

// const sqrt = num => Math.sqrt(num)


// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2).map(Math.sqrt)  //сначало с помощью pow2 возводиться в квадрат, потом с помощью sqrt твыводит корень
// console.log(pow2Fib)


const pow2 = num => num ** 2
const pow2Fib = fib.map(pow2)
const filteredNum = pow2Fib.filter(num => num > 20)  //фильтр данных 
console.log(pow2Fib)
console.log(filteredNum)




const people = [
    {name: 'Nurasyl', budget: 5100},
    {name: 'Nurashi', budget: 4200},
    {name: 'borachi', budget: 6500}
]


const allBudget = people
    .filter(person => person.budget > 5000)
    .reduce((acc, person) => {
    if (person.budget > 5000) {
    acc += person.budget
    
    }
    return acc
}, 0)

console.log(allBudget)


// const displayItems = allItems.filter(item => item.name.contains('phone'))  //стандартный поисковик



