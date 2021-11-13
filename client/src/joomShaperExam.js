//-------------------------Question for JoomShaper ----------------------------

// TODO 1 . How does the JavaScript interprets the following code?
console.log(x);
var x = 100;
// TODO Ans : var x = 100;console.log(x)

//TODO  2 . What is the output?
const str = "hello";
const arr = [...str];
console.log(arr);
// TODO Ans : [ 'h', 'e', 'l', 'l', 'o' ]

//TODO  3 . What is the output of the code snippet?
var fullmoon = true;
var species = "human";

if (fullmoon) {
  var species = "werewolf";
  console.log(species);
}
console.log(species);
// TODO Ans : werewolf werewolf

//TODO  4 . What would be the output of the following code?
function multiply(n1, n2, ...others) {
  console.log(n1, n2, others);
}
multiply(2, 3, 5, 6);
// TODO Ans : 2 3 [ 5, 6 ]

//TODO  5 . What is the output of the snippet?
class MyClass extends (String, Array) {
  constructor() {}
}
const a = new MyClass();
console.log(a instanceof Array);
// TODO Ans : error

//TODO  5 correction . What is the output of the snippet?
class MyClass extends (String, Array) {
  constructor() {
    super();
  }
}
const a = new MyClass();
console.log(a instanceof Array);
// TODO Ans : true

//TODO  6 . What command you will use to initialise git in a project?
// TODO Ans : git int

//TODO  7 . What months have 28 days?
// TODO Ans : February

//TODO  8 . What is the console sequence of the following code snippet?
function run() {
  const promise = new Promise((resolve) => {
    resolve("promise");
  });
  setTimeout(() => console.log("setTimeout"));

  promise.then((res) => console.log(res));
  console.log("log");
}
run();
// TODO Ans : log promise setTimeout

// TODO 9. What is the output?
var x = 5;
(function () {
  console.log(x);
})();
// TODO Ans : 5

// TODO 10. What is the counter value after clicking the button for the first time at this React component?
function Counter() {
  const [count, setCount] = useState(0);
  const updateCounttoFive = () => {
    let i = 0;
    while (i < 5) {
      setCount(count + 1);
      i++;
    }
  };
  return <button onClick={updateCounttoFive}>{count}</button>;
}
// TODO Ans : 5

// TODO 11. What is used in ReactJs to increase performance?
// TODO Ans : Virtual DOM

// TODO 12. What is the complexity of the whole code?
for (let i = 0; i < n; i++) {
  // do some task
}
for (let i = 0; i < n; i++) {
  // do some task
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // do some task
  }
}
// TODO Ans :  O(n^2)

//TODO 13 . What would be the output of the code snippet.
function getDays(isLeapYear) {
  switch (isLeapYear) {
    case true:
      const days = 29;
      return days;
    case false:
      const days = 28;
      return days;
    default:
      return undefined;
  }
}
console.log(getDays(true));
// TODO Ans : error

//TODO  13 correction . What would be the output of the code snippet.
function getDays(isLeapYear) {
  switch (isLeapYear) {
    case true:
      const days = 29;
      return days;
    case false:
      days = 28;
      return days;
    default:
      return undefined;
  }
}
console.log(getDays(true));
// TODO Ans : 29

//TODO 14 . What would be the output of the following code snippet.
const circle = {
  radius: 10,
  area() {
    return Math.round(Math.PI * this.radius * this.radius);
  },
  perimeter: () => Math.round(2 * Math.PI * this.radius),
};
console.log(circle.area(), circle.perimeter());
// TODO Ans : 314 NaN

// TODO 15 . What do you use for removing duplicate elements from an array?
// TODO Ans : Set
