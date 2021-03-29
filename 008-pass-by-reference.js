function changeObj(d) {
  d.prop1 = function () {};
  d.prop2 = {};
}

let c = {};
c.prop1 = {};
changeObj(c);
console.log(c); // { prop1: [Function (anonymous)], prop2: {} }
