function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//prototype -> prototype of any object created from person
Person.prototype.greet = function() {
    console.log('Hello', this.firstName, this.lastName);
}

const john = new Person('John', 'Doe');
console.log(john.firstName)

john.greet();

const jane = new Person('Jane', 'Doe')
jane.greet(); 