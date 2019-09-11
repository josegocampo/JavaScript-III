/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hello (param) {
    "use strict";
    console.log(this);
    return `I am going to say ${param}`;
  }


// Principle 2

// code example for Implicit Binding
const hobbit = {
  name: 'Sam',
  age: 32,
  food: 'potatoes',
  cook: function() {
    return `${this.name} likes to cook ${this.food}`;
    // return (this.name + ' likes to cook ' + this.food);
  }
}
console.log(hobbit.cook());


// Principle 3

// new keyword binding

const person = {
  name: 'Jill'
}
const hobbi = {
  name: 'Frodo'
}
const skills = ["HTML", "CSS", "JS", "React"];

function introduceMyself(whatever, thing, stuff, skills4) {
  return `Hi my name is ${this.name} and I know how to do ${thing}, ${whatever}, and ${stuff}. ${skills4}`;
}
// apply
console.log(introduceMyself.apply(person, skills));

//call
console.log(introduceMyself.call(hobbit, skills[0], skills, person.name));

//bind
const introducePerson = introduceMyself.bind(person, skills[1], skills[0], skills[3], skills[2]);
const introduceHobbit = introduceMyself.bind(hobbit, ...skills);

console.log(introducePerson());
console.log(introduceHobbit());

// Principle 4

// code example for New Binding
const animal = new Animal('param');
function Animal(food) {
  this.food = food;
  this.eat = function() {
    console.log(`This animal likes to eat ${this.food}.`);
  }
}
const zebra = new Animal('grass');
console.log(zebra);
zebra.eat();
const lion = new Animal('meat');
console.log(lion);
lion.eat();