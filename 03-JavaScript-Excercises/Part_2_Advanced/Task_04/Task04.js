function Person() {
   let _salary = 1000;
 
   this.getSecretSalaryInfo = function () {
      return _salary;
   }
 }
 
 const person1 = new Person();
 console.log(person1.getSecretSalaryInfo());