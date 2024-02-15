const person  = {
    name: 'Nurasyl',
    age: 16,
    isProgrammer: true,
    lenguages: ['kz', 'eng', 'ru'],
    'complex key': 'complex Value',
    ['key-' + (1 + 3)]: 'Cumputed key',  //key_4
    greet() {
        console.log('greet from person')
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])


// person.greet()

// person.age++
// person.lenguages.push('by')
// console.log(person)


// person['key-4'] =  undefined




// delete person['key-4']
// console.log(person)
// console.log(person['key-4'])

// const name = person.name
// const age = person.age
// const lenguages = person.lenguages //что бы не писать в три строки можно написать как в 39 строке

// const {name, age: personAge, lenguages} = person


// console.log(person)
// for (let key in person) {
//   if (person.hasOwnProperty(key))
//     console.log('key:', key)
//     console.log('value:', person[key])
// }


// const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log('key:', key)
//     console.log('value:', person[key])
// })
//  console.log(keys)


// Context









