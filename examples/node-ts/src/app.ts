// Asinagcion de tipos
// acceso | nombre | tipo | valor
// let nombre: string = 'Peter';

// Tipos de datos
// number
// string
// boolean
// any
// void
// null
// undefined
// never
// object
// Array
// Tuple
// Enum

let userName: string = 'Peter';
let age: number = 32;
let num: number = 0.444;
let hex: number = 0xf00d;
let bin: number = 0b1010;
let isAdult: boolean = true;
let hobbies: string[] = ['Run', 'Read', 'Listen'];
let numbers: number[] = [1, 2, 3, 4, 5, 6];

// Tuples
let person: [string, number, boolean] = ['Peter', 32, false];

// Inferencia de tipos
let fullName = 'true';
let subjects = ['Math', 'Physics', 'Chemistry'];
let scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// Funciones
function add(a: number, b: number): number {
  return a + b;
}

add(1, 2);
// add('1', 3) // Error
add(1, 3);

// Union Types
let id: number | string;
id = 1;
id = '1adsfsdf';
let data: number[] | null;

// As
let value: any = 'Hello World';
// let length: number = (value as string).length;

// // <> (Angle Bracket)
// let length2: number = (<string>value).length;

// Types | Interfaces
type Person = {
  name: string;
  age: number;
  isAdult?: boolean;
};

interface Person2 {
  name: string;
  age: number;
  isAdult?: boolean;
}

const personita: Person = {
  name: 'Peter',
  age: 32,
};

const personita2: Person2 = {
  name: 'Peter',
  age: 32,
};

const people = [personita, personita2];
