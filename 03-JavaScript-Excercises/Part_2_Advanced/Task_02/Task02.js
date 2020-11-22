class Person {
   constructor(Name) {
      this.name = Name;
      this.planet = "Земя";
   }
    sayHello() {
      console.log(`Здравей ${this.name} от планетата ${this.planet}`);
	}
 }
 
const person1 = new Person("Чък Норис");
const person2 = new Person("Димчо Дебелянов");
const person3 = new Person("Павел Азълов");

person1.sayHello();
person2.sayHello();
person3.sayHello();