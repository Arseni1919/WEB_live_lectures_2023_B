// alert('Hello from JS file')

// console.log('Hello from JS file in console!')
// console.warn('Hello from JS file in console!')
// console.error('Hello from JS file in console!')


// comments

/*
commnets
commnets
commnets
commnets
commnets
 */


// Variables

// var x = 5
// console.log(x)
// let y = 4
// y = 40
// console.log(y)
// const z = 3
// // z = 30
// console.log(z)

// Data types
// const name = 'John'
// console.log(typeof name)
// const age = 30
// console.log(typeof age)
// const rating = 4.5
// console.log(typeof rating)
// const isCool = true  // false
// console.log(typeof isCool)
// const x = null
// console.log(typeof x)
// const y = undefined
// console.log(typeof y)
// let z
// console.log(typeof z)
// console.log(z)


// operators
// let x = 5
// const y = 7
// // x = x + y
// x **= y
// console.log(x)

// concatenation

// const name = 'Ariel'
// const age = 35
// let to_print = `My "best" friend's is ${name} and I am ${age}`
// // string properties
// console.log(typeof to_print)
// console.log(to_print.length)
// console.log(to_print.toUpperCase())
// console.log(to_print.toLowerCase())
// console.log(to_print.substring(0, 7))
// console.log(to_print.substring(0, 7).toUpperCase())
// console.log(to_print.split(' '))
// console.log(to_print)

// Arrays
// const numbers = new Array(1, 2, 3, 4, 5)
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers)
//
// const arr1 = ['apple', 1, true]
// console.log(arr1)
//
// console.log(arr1[0])
//
// const fruits = ['apple', 'orange', 'banana']
// fruits[7] = 'grapes'
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// console.log(typeof fruits[3])
// fruits.push('pineapple')
// console.log(fruits)
// fruits.unshift('klementina')
// console.log(fruits)
// const x = fruits.pop()
// console.log(x)
// console.log(fruits)
// console.log(typeof fruits)
// console.log(Array.isArray(fruits))
// console.log(fruits.indexOf('banana'))
// console.log(fruits.length)

// Objects

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isMarried: false,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'New York City',
        state: 'NY'
    }
}
// console.log(person)
// console.log(person.firstName)
// console.log(person.address)
// console.log(person.address.city)
// console.log(person.hobbies[1])

// const firstName = person.firstName
// const lastName = person.lastName
// const city = person.address.city
// const {firstName, lastName, address: {city}} = person
// console.log(firstName)
// console.log(lastName)
// console.log(city)

// person.email = 'john@gmailcom'
// console.log(person)

const todos = [
    {
        id: 1,
        text: 'do homework',
        isCompleted: true,
    },
        {
        id: 2,
        text: 'do dishes',
        isCompleted: false,
    },
        {
        id: 3,
        text: 'meeting',
        isCompleted: false,
    },
]
// console.log(todos)
// const todosJSON = JSON.stringify(todos)
// console.log(todosJSON)
// console.log(typeof todosJSON)
// const todos2 = JSON.parse(todosJSON)
// console.log(todos2)

// LOOPS

// for (let i = 0; i < 10; i++){
//     console.log(`For Loop Number ${i}`)
// }
// let i = 0
// while (i < 10){
//     console.log(`While Loop Number ${i}`)
//     i++
// }
//
// for (let i = 0; i < todos.length; i++){
//     console.log(todos[i].text)
// }
//
// for (let todo of todos) {
//     console.log(todo.text)
// }
//
// todos.forEach(function (todo) {
//     console.log(`id: ${todo.id}, text: ${todo.text}`)
// })
//
// const todosText = todos.map(function (todo) {
//     return todo.text
// })
// console.log(todosText)
//
// const todosCompleted = todos.filter(function (todo) {
//     return todo.isCompleted
// })
// console.log(todosCompleted)
//
// const todosUncompleted = todos.filter(function (todo) {
//     return !todo.isCompleted
// })
// console.log(todosUncompleted)
//
// const todosUncompletedText = todos.filter(function (todo) {
//     return !todo.isCompleted
// }).map(function (todo){
//     return todo.text
// })
// console.log(todosUncompletedText)

// conditionals

// const x = 11;
// // const y = '10';
// const y = 12;
// console.log(x === y)
//
// if (x > 10 && y > 10){
//     console.log('success!')
// } else {
//     console.log('fail!')
// }

// const x = 11
// const color = x > 10 ? 'red': 'blue'
// console.log(color)

// const color = 'orange'
// switch (color) {
//     case 'red':
//         console.log('red')
//         break
//     case 'blue':
//         console.log('blue')
//         break
//     default:
//         console.log('default')
//         break
// }

// function addNums(num1, num2){
//     console.log(num1 + num2)
// }
// function addNums(num1=10, num2=20){
//     return num1 + num2
// }
// const sum = addNums()
// console.log(sum)

// Arrow functions

const addNums = (num1=10, num2=30) => {
    return num1 + num2
}
const sum = addNums()
console.log(sum)

const addNums2 = (num1=10, num2=30) => num1 + num2

const su2 = addNums2()
console.log(su2)

const addFive = num1 => num1 + 5
const out1 = addFive(10)
console.log(out1)

todos.forEach(todo => console.log(todo.text))





























