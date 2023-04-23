// OOP - the old way

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
//
//     this.getBirthYear = function () {
//         return this.dob.getFullYear()
//     }
//
//     this.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// function Person(firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
// }
//
// const person1 = new Person('Moti', 'Katz', '4-3-1980')
// const person2 = new Person('Rina', 'Katz', '4-3-1988')
//
// // console.log(person1.getBirthYear())
// // console.log(person2.getBirthYear())
//
// Person.prototype.getBirthYear = function () {
//         return this.dob.getFullYear()
// }
//
// Person.prototype.getFullName = function () {
//     return `First Name: ${this.firstName}, Last Name: ${this.lastName}`
// }
//
// console.log(person1)
// // console.log(person1.dob)
// // console.log(person1.dob.getDay())
// // console.log(person1.dob.getMonth())
//
// console.log(person1.getBirthYear())
// console.log(person2.getBirthYear())
//
// console.log(person1.getFullName())
// console.log(person2.getFullName())

// OOP - the modern way

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.dob = new Date(dob)
//     }
//
//     getBirthYear(){
//         return this.dob.getFullYear()
//     }
//
//     getFullName(){
//         return `First: ${this.firstName}, Last: ${this.lastName}`
//     }
// }
//
// const person1 = new Person('Moti', 'Katz', '4-3-1980')
// const person2 = new Person('Rina', 'Katz', '4-3-1988')
//
// console.log(person1)
// console.log(person2)
// console.log(person1.getBirthYear())
// console.log(person2.getBirthYear())
// console.log(person1.getFullName())
// console.log(person2.getFullName())

// Window object
// alert('HELLOOOOO!!!!')
// console.log(window)
// window.console.log('this is a regular log')
//
// console.log(window.innerHeight)
// console.log(window.innerWidth)
// window.localStorage['my_special_key'] = 12345678
// console.log(window.localStorage)
// console.log(window.localStorage['my_special_key'])
// console.log(window.document)

// DOM

// console.log(document.getElementById('my-form'))
// const my_form = document.getElementById('my-form')
// console.log(my_form)
//
// const my_form2 = document.getElementsByClassName('block')[0]
// console.log(my_form2)
//
// const my_form3 = document.getElementsByTagName('form')[0]
// console.log(my_form3)

// getElementsByTagName
// const form1 = document.querySelector('form')
// console.log(form1)
//
// // getElementsByClassName
// const form2 = document.querySelector('.block')
// console.log(form2)
//
// // getElementById
// const form3 = document.querySelector('#my-form')
// console.log(form3)
//
// // getElementsByTagName
// const form4 = document.querySelectorAll('form')[1]
// console.log(form4)
//
// // getElementsByClassName
// const form5 = document.querySelectorAll('.block')[1]
// console.log(form5)

// const items = document.querySelectorAll('.item')
// items.forEach(item => console.log(item.textContent))

// const ul = document.querySelector('.items')
// console.log(ul)

// ul.remove()

// ul.lastElementChild.remove()

// ul.firstElementChild.textContent = 'Hello this is Lecture 6!'

// ul.children[1].innerHTML = '<a href="#">This is a new content</a>'
// ul.children[2].textContent = '<a href="#">This is a new content</a>'

// const btn = document.querySelector('.btn')
// btn.style.background = 'red'
// btn.style.color = 'white'
// btn.style.border = '1px solid red'
// btn.style.border_radius = '5px'

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('click')
// })

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(e)
//     console.log(e.target)
//     console.log(e.target.className)
// })

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1> Hello! </h1>'
// })
//
// btn.addEventListener('mouseover', (e) => {
//     console.log('mouseover')
//     document.querySelector('.btn').classList.remove('btn-out')
//     document.querySelector('.btn').classList.add('btn-over')
// })
//
// btn.addEventListener('mouseout', (e) => {
//     console.log('mouseout')
//     document.querySelector('.btn').classList.remove('btn-over')
//     document.querySelector('.btn').classList.add('btn-out')
// })

// Form Validation Example

const my_form = document.querySelector('#my-form')
const name_input = document.querySelector('#name')
const email_input = document.querySelector('#email')
const msg = document.querySelector('.msg')
const users_list = document.querySelector('.users')

const on_submit = (e) => {
    e.preventDefault()
    // console.log(name_input)
    // console.log(name_input.value)

    if (name_input.value === '' || email_input.value === '') {
        // console.log('ERROR!')
        msg.innerHTML = 'Please enter all fields'
        msg.classList.add('error')
        setTimeout(() => {
            msg.innerHTML = ''
            msg.classList.remove('error')
        }, 3000)
    } else {
        // msg.innerHTML = ''
        // msg.classList.remove('error')
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${name_input.value}: ${email_input.value}`))
        users_list.appendChild(li)
        // Clear fields
        name_input.value = ''
        email_input.value = ''
    }
}

my_form.addEventListener('submit', on_submit)

















