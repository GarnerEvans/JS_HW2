
let person = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function Favorites(object){
    console.log(Object.values(object))
}
console.log(Favorites(person))



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name
    this.age = age

    this.printInfo = () => console.log(`This persons name is ${this.name} and their age is ${this.age}`);

    this.addYears = (name) => this.age = this.age + 1;
        return this.age
    }




let Garner = new Person('Garner', 22)
let Beck = new Person('Beck', 21)
console.log(Garner.printInfo())
console.log(Beck.addYears())
console.log(Beck.addYears())
console.log(Beck.addYears())

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//



    // Create a Promised based function that will check a string to determine if it's length is greater than 10.
    // If the length is greater than ten console log "Big word". 
    // If the length of the string is less than 10 console log "Small word"

const isBigWord = (str) => {
    return new Promise((resolve, reject) => {
        if(str.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

isBigWord('Helloofnsdanfksjn')

.then((result) => {
    console.log('Big word')
})

.catch((error) => {
    console.log('small number')
})

