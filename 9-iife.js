const firstName = "Jane";
// wrap into parentheses to tell JS it's an expression
(function (lastName) {
  const firstName = "John";
  console.log(firstName, lastName);
})("Doe");

console.log(firstName);

// John Doe
// Jane
