import {Person} from './person';

export class Teacher extends Person{
    constructor(name, degree){
       super(name); //property of main class,so use super keyword
       this.degree=degree;
    }
    teach(){
        console.log("teaches well");
    }
}
