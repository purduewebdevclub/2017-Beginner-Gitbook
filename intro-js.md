# Introduction
Welcome to the weird and wonderful world of JavaScript development. 
JavaScript, as a language, is used primarily in the development of web applications and websites. 

## Why is JavaScript weird? 

### Lack of types 

JavaScript is a *loosely typed* or *dynamically typed* language

What this means is that variables do not have an explicitly defined type assigned by the developer. 

This does **not** mean that JavaScript doesn't have types or that they are of type var. The type of these variables is determined internally. 

Look at the example below. 

```javascript
var a = 42; //a is a number here
var a = 'random'; //a is a string here
var a = true; //a is a boolean here
```

JavaScript determines types during "runtime", in other words the type is determined when the code is running. 

This makes JavaScript development cumbersome and bug ridden, but there are improvements being made. 

A solution to this has been provided through [TypeScript](https://www.typescriptlang.org/docs/home.html)

TypeScript is a "strongly typed" language unlike JavaScript. 

Angular 4 utilizes TypeScript extensively.

### Lack of classes

JavaScript did not have the concept of classes when it was first written. 

Originally they were implemented by creating multiple functions. 

Classes have now been provided as part of [ECMAScript 2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), but this is just syntactic sugar. 

Example class
```javascript 
class Shape {
    constructor(param1, param2) {
        
    }
}
```

The constructor method is what is used to create an instance of the class Shape above. 

You can only have one constructor method per class. 

The parameters for the constructor [param1, param2] are also optional. You could just as easily define the class like below. 

```javascript
class Shape {
    constructor() {
        
    }
}
```

The params represent the properties you want to set on your object. 

#### Side Note
What exactly is syntactic sugar? 

Syntactic sugar is basically syntax for a programming language that makes it easier for developers to read and write. 

### Functions are first class objects

This one is a little hard to wrap your heads around so we won't go into too much detail, but it is one of the most fundamental aspects of JavaScript. 

It is what makes JavaScript such a powerful language. 

Basically, what this means is that functions can be constructed during execution, they can be passed around as variables or parameters to other functions and you can also return a function as the value of another function (what is referred to as currying). 

Confused? That's okay. If you wish to, you can read more about it [here](http://timmknight.github.io/2015/first-class-functions-javascript/)

There are a lot of other reasons, but these will be introduced as the meetings move forward. 

## Basic data types in JavaScript
Some of the ECMAScript standard datatypes:
* Boolean 
* Null
* Undefined
* Number
* String

# JSON

JavaScript Object Notation (JSON for short) is JavaScript object syntax. It is the primary form of information interchange on the web. 

Here is a basic JSON object. 

```javascript
var jsonObj = {
    "name": "Zaid Humayun", 
    "age": "21", 
    "city": "West Lafayette"
};
```

When you have the above JSON object, getting the values for specific key value pairs is simple using the '.' operator. 

To get the name from the above object, you would simply do

```javascript
    var name = jsonObj.name; //Zaid Humayun
```

or you could also use square brackets to denote what property on the object you are trying to access

```javascript
    var name = jsonObj["name"]; //Zaid Humayun
```

JSON also contains two methods called JSON.parse() and JSON.stringify() to convert between a string and JSON object. 

Read more about them [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

# Booleans in JavaScript

JavaScript has two basic boolean values: true and false. 

Setting some value up as a boolean is fairly simple

```javascript
var a = true; //a is the true boolean value
var b = false; //b is the false boolean value

//Using these values
if(a) {
    //do something here
}
if(!b) {
    //do something else here
}
```

But there's something weird about booleans in JS too. Who could have guessed right? 

JavaScript has something called *truthy* and *falsey* values. 

The following are all falsey values: 
* undefined, null
* Boolean: *false*
* Number: 0, NaN
* String: ''

Every other type in JavaScript evaluates to *truthy*

How do you make use of this? 

```javascript
var myStr = '' //defining an empty string here
if(myStr) {
    //this branch will not fire
} else {
    //this branch will fire
}

var a = 2; //defining a as a number here
if(a) {
    //this branch will fire
} else {
    //this branch will not fire 
}
```
## Important Note

You might see this form of a boolean operator used in certain places, so we wanted to introduce it to you here

It is possible to typecast an object (for example) to a boolean type using a double not operator (that is, !!)

```javascript 
oObject = {'key': value} //some object here
val = !!oObject; //typecasting to boolean to set another value
//In the above case, val would be set to true
```
Basically, what the above code does, is to use the value of oObject to cast to a boolean. 

If oObject was an empty object, undefined, null or any falsey value, val would have been set to false. 


