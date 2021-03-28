const person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function() {
        console.log('Hello', this.firstName, this.lastName)
    }
}

person.greet();

//Dynamically decide the property name
console.log(person['lastName'])