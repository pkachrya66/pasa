// ES 6 Array and Object with Spread Operator
const alpabhat = [ 'a', 'b', 'c', 'd', 'e']
const numbers = [1, 23, 454, 45, 13, 67, 67, 890]
// console.log(...alpabhat, ...numbers, ['bear', 'dogs'])
// const a = alpabhat[0]
// console.log(a)
// older way
const newA= alpabhat.concat(numbers)
// console.log(newA)
//spread operator
// const [c, d, ...rest] = alpabhat
// console.log(d)
// console.log(rest)
const newArray = [...alpabhat, ...numbers, 'ram', 'shyam']
// console.log(newArray)
function sumAndMultiply (a,b){
    return[a+b, a*b]
}
const[sum, multiply, division = "Not evaluated"] = sumAndMultiply(5, 9)
// console.log(sum)
// console.log(division)

//Destructure Objects
personOne = {
    name: "Buddha",
    age: 99,
    Address:{
    City: "Lexington",
    Street: "Accord Lane"
}
}
personTwo = {
    age: 98,
    favoriteSport: "Hockey"
}
// const{ name, age} = personOne
// console.log(personOne)
//passing other functions and key vlaues adding default values
// const{ name: firstname, age, favoriteFood = "Rice"} = personOne
// console.log(favoriteFood)
// spread operator in objects
const{ name: firstname, age, favoriteFood = "Rice", ...rest} = personOne
// console.log(rest)
const personThree = { ...personOne, ...personTwo}
// console.log(personThree)
// more usecases in destructuring
function mainUser({name, age, location = "Columbus"}){
console.log(`Name is ${name} and age is ${age} fav location is ${location}`)}
mainUser(personOne)








    
