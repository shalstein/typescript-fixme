// add the type annotation to explicitly specify the type of the variable:
var isDone = false;
var lines = 42;
var username = "Anders";

// annotate the type as when it's not known
let unknownTypeVariable;

//annotate this array
var list = [1, 2, 3];

// annotate the return type of this function
function littleHorribleAlert() {
  alert("I am a little annoying box!!");
}

var f1 = function (i) {
  return i * i;
};

//change f4 to accept a string or a number as a parameter
function f2(i) {
  console.log("The value was " + i);
}

// Annotate the person objects with an interface. Some properties are optional
var person1 = { name: "Bobby", move: function () {} };
var person2 = { name: "Bobby", age: 42, move: function () {} };

// Annotate mySearch to describe a function that accepts two string parameters
var mySearch = function (src, sub) {
  return src.search(sub) != -1;
};

//annotate the constructor arguments and properties
class Point {
  x = 0;
  constructor(x, y = 0) {
    this.x = x;
    this.y = y;
  }
  dist() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// annotate `PointPerson` to use all properties of `Person` and then add the missing required property
class PointPerson {
  constructor(name) {
    this.name = name;
  }
}

// annotate this array
var arrayOfAnyType = [1, "string", false];

// fix the foo object so bar and baz can be added
let foo = {};
foo.bar = 123;
foo.baz = "hello world";
