function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const john = new Person('John', 'Doe');
console.log(john.firstName)