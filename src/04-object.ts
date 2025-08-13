// 1. inline type anotation
let user: {
  name: string;
  age: number;
} = {
  name: "kyra",
  age: 20,
};

// 2. infer
let user2 = {
  name: "kyra",
  age: 20,
};

// 3. type alias
type UserType = {
  name: string;
  age: number;
};

let user3: UserType = {
  name: "kyra",
  age: 20,
};

// property readonly
type Point = {
  readonly x: number;
  readonly y: number;
};
let origin: Point = {
  x: 0,
  y: 0,
};

// origin.x = 10 // error

// index signature
type StringDictionaryType = {
  [key: string]: string;
};

let userSettings: StringDictionaryType = {
  theme: "dark",
  language: "en",
};

userSettings.fontSize = "medium";

// nested object
type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  address: Address;
};

let person: Person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};
