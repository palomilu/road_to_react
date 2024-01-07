class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + " " + this.lastName;
  }

  play() {
    const numbers = [1, 2, 3, 4];

    const exponentialNumbers = numbers.map(function (number) {
      return number * number;
    });

    console.log(exponentialNumbers);
  }
}

const person1 = new Person("Luis", "Palomino");
console.log(person1.getName());
// Luis Palomino
person1.play();
// (4) [1, 4, 9, 16]
