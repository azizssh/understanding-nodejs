const a = 1;
const b = 2;
const c = 3;

console.log(a+b+c);

const greet = function() {
    console.log('hello')
}

greet()

function logGreeting(fn) {
    fn()
}

logGreeting(greet)