const greet = function () {
  console.log("hello");
};

greet();

function logGreeting(fn) {
  fn();
}

logGreeting(greet);
