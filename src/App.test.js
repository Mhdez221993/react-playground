// A class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// A class representing a Student, which extends the Person class
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  sayHello() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}.`;
  }
}

// A Jest test that uses the `toBeInstanceOf` matcher
test('a Student is an instance of Person', () => {
  const student = new Student('John Doe', 16, 10);
  expect(student).toBeInstanceOf(Person); // This checks that `student` is an instance of the `Person` class
});
