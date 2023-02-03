const username: string= 'nicobytes';
const sum = (a: number, b: number)=> {
    return a+b;
}
sum(1,5);

class person {
  age: number;
  lastname: string;

    constructor(age:number, lastname: string){
      this.age = age;
      this.lastname = lastname;
    }

}
const nico = new person(15,'molina');
nico.age;
const and= new person(27,'ruia');