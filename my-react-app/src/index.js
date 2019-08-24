//below import statement for Modules concept only--it always has to be written at the top of file
import {Teacher} from "./teacher";
const person={
    name: 'kavya',
    walk(){},
    talk(){}
}
person.talk();
console.log("alert");
person.name = 'kavya1';
console.log(person);
const target='name';
//arrays are used here to change the value dynamically for suppose when user iputs the value
person[target.value]='kavya2';
console.log(target.value);
console.log(person.name);
const b=5;
//b=6; --throws error if we change value as const can't be reassigned
console.log(b);

//this keyword: it returns output based on how it is invoked
console.log('"this" functionality:');
const person1={
    name: "kavya3",
    walk1(){
        console.log(this);
    }
}
console.log(person1.walk1);
const walk2= person1.walk1; //walk2 now becomes object as person.walk1 is assigned to it which is an object
console.log('alert');
console.log(walk2); // returns person1.walk1 method
walk2(); //returns global 'window' object as it is called as a stand alone object(outside of object) and also walk2 became an 'object' data type from 'const'
// if 'strict' mode is enabled, it returns 'undefined'

console.log('"binding this functionality:"');
//'bind' keyword : bind a function to an object such that even if object is called as stand-alone fn, 
//it still returns the actual method definition instead of global window object

// functions in JS are objects
//pass object as an argument inside bind fn so that it always returns object that is passed instead of global window object

const walk3= person1.walk1.bind(person1);
walk3(); //always returns person1 object now

console.log("arrow functions:");
const square = function(number){
    return number*number;
}
console.log(square(5));
//this function can be written as arrow function:
const square1 = number => number*number;
console.log(square1(6));
//ex-2:
const jobs=[
    { id:1, isActive:true},
    { id:2, isActive:false},
    { id:3, isActive:true}
]

const activejobs= jobs.filter(function(job){
    return job.isActive;
});
console.log(activejobs);
//arrow function
const activejobs1 = jobs.filter(job => job.isActive);
console.log(activejobs1);
console.log("Arrow function and 'this':");
const car={
    drive(){
        console.log("this", this);
    }
}
car.drive(); // returns drive function
// setTimeout -- call back functions
const car1={
    drive(){
        setTimeout(function(){
            console.log("this",this);
        }, 1000);
    }
}
car1.drive(); // returns window object beacuse of setTimeout function
// how to get rid of this window object--below is the old method before arrow functions
const car2={
    drive(){
        var self= this;
        setTimeout(function(){
            console.log("self",self);
        }, 1000);
    }
}
car2.drive();// returns self function def instead of window object
// this can be achieved easily using arrow fns instead of 'self'
const car3={
    drive(){
        setTimeout(()=>{
            console.log("this",this);
        }, 1000);
    }
}
car3.drive();
// imp: Arrow functions don't rebind the 'this' keyword

console.log("array.map method:");
//array map method is very useful in react for rendering lists
const names=['kavya','bhagi','sai'];
const list= names.map(function(names){ 
    return ('<li>'+names+'</li>');
})
console.log('alert');
console.log(list);
//using arrow function
const list2= names.map(names =>'<li>'+names+'</li>');
console.log('alert2');
console.log(list2);
//using back tick -- o/p is same in all 3 cases
const list3= names.map(names =>`<li>${names}</li>`);
console.log('alert3');
console.log(list3);
console.log('"object destructuring:"');
// if we need to extract some or all of the object properties and save them in another objects/variables
const house={
    basement:'abc',
    one:'xyz',
    two: 'pqr'
}
//destructuring object and assigning values individually
const {basement1: b1, one1, two1} = house; // b1 is an alias here
console.log(b1, one1,two1); // doubt: why it is printing undefined
console.log('"spread operator:"');
//this operator is used to concatenate, add elements in the middle or at any index of new array
//this can be used with objects too
const first=[1,2,3];
const mixArray=first.concat(second);
console.log(mixArray);
const mixArray1= [...first, ...second];
console.group(mixArray1);
const mixArray2= [...first,7,...second,9,10];
console.log(mixArray2);
//objects:concatenate, clone
const human={name:'kavya'};
const human1={job:'coding'};
const humanCombine={...human, place:'earth',...human1};
console.log(humanCombine);
const clone={...human,...human1};
console.log(clone); //creating an identical copy with different name
console.log('"classes:"');
//class is a blue print of object
// if we have different objects with the same method--the code is 
//redundant and if we have to modify the method, we need to change in both objects--to avoid this, 
//we need blue print of object--which is class
 class Flight{
     constructor(name){
         this.name=name;
     }
     fly(){
         console.log("fly in the sky");
     }
 }
 const flight= new Flight("boeing");
 flight.fly();
 console.log('"Inheritance:"');
 //inheritance and composition are two concepts which are used for inheriting
 class Flight1 extends Flight{
     constructor(name, ability){
        super(name); //property of main class,so use super keyword
        this.ability=ability;
     }
     flyhigh(){
         console.log("flies so high");
     }
 }
 const flight1= new Flight1("boeing300", "5kft");
 flight1.fly();
 flight1.flyhigh();
 console.log('"Modules:"');
 //refer to teacher.js and person.js files
 //import has to be written only at the top of file
 const teacher= new Teacher("kavya", "cs");
 teacher.teach();
 teacher.walk();
 console.log('"Named and Default Exports:"');
 //default import:import nameofclass from ''; also add default to export class
 //named import: import {nameofclass} from '';
 // it possible in react that there are both named and default imports
 // importing both classes:
 // import Teacher, {promote} from ".\teacher";
 // here promote is named import class and Teacher is default import class
 // in general we use: import React, {Component} from 'react';
 // here 'React' is exported default from 'react' and 'Component' is named export from 'react'

