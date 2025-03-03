let add=(a,b)=>(a+b)
console.log(`The sum is${add(4,8)}`);

/*  
Typescript is the super set of javascript.
when ever the code is compiled it convert it into the olain javascript file.

typescript-->typescript compiler-->javascript

all javascript program is typescript program

TypeScript is a superset of JavaScript.
TypeScript adds type to the JavaScript and helps you avoid potential bugs that occur at runtime.
TypeScript also implements the future features of JavaScript.

-->Why TypeScript
JavaScript is dynamically typed

TypeScript supports a variety of data types, which helps enforce type safety and make your code more predictable. Here are the main data types in TypeScript:

Primitive Types:

string: Represents textual data.

typescript
let name: string = "Alice";
number: Represents numerical values (both integers and floating-point numbers).

typescript
let age: number = 30;
boolean: Represents true/false values.

typescript
let isStudent: boolean = false;
null and undefined: Represents absence of a value.

typescript
let emptyValue: null = null;
let notAssigned: undefined = undefined;
Array:

Represents a list of items.

typescript
let names: string[] = ["Alice", "Bob", "Charlie"];
let scores: number[] = [10, 20, 30];
Tuple:

Represents an array with a fixed number of elements with known types.

typescript
let person: [string, number] = ["Alice", 30];
Enum:

Represents a collection of related values that can be numeric or string.

typescript
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;
Any:

Represents any type, can be used when the type is not known or dynamic.

typescript
let randomValue: any = 42;
randomValue = "Hello";
randomValue = true;
Object:

Represents a non-primitive type, which can have properties and methods.

typescript
let person: { name: string; age: number } = {
    name: "Alice",
    age: 30
};
Void:

Represents the absence of any type, commonly used as the return type for functions that do not return a value.

typescript
function greet(): void {
    console.log("Hello, World!");
}
Never:

Represents the type of values that never occur, often used for functions that never return or throw an error.

typescript
function error(message: string): never {
    throw new Error(message);
}
Union:

Allows a variable to hold multiple types.

typescript
let mixedValue: string | number;
mixedValue = "Hello";
mixedValue = 42;
Type Aliases:

Custom names for specific types.

typescript
type StringOrNumber = string | number;
let value: StringOrNumber = "Hello";
value = 42;


Access Modifiers
TypeScript provides three access modifiers to control the visibility of properties and methods within a class:

Private:

Limits the visibility to the same class only.

Cannot be accessed outside the class.

Example:

typescript
class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;
  
  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person('153-07-3130', 'John', 'Doe');
console.log(person.ssn); // compile error
Public:

Accessible from all locations.

The default modifier if none is specified.

Example:

typescript
class Person {
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
Protected:

Accessible within the same class and subclasses.

Cannot be accessed outside the class or its subclasses.

Example:

typescript
class Person {
  protected ssn: string;
  private firstName: string;
  private lastName: string;
  
  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(ssn: string, firstName: string, lastName: string) {
    super(ssn, firstName, lastName);
  }

  getEmployeeSsn(): string {
    return this.ssn; // accessible within subclass
  }
}

*/
let message: string = 'Hello, World!';
console.log(message);

let box;
console.log(typeof(box)); // undefined

box = "Hello";
console.log(typeof(box)); // string

box = 100;
console.log(typeof(box)); // number
