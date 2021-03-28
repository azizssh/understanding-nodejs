function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function() {
    console.log('Hello', this.firstName, this.lastName);
}

const john = new Person('John', 'Doe');
console.log(john.firstName)

john.greet();