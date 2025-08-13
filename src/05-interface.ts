// type vs interface
interface PersonInterface {
  name: string;
  age: number;
  greet(message: string): void;
}

let user: PersonInterface = {
  name: "kyra",
  age: 20,
  greet(message: string) {
    console.log(message);
  },
};

user.greet("hello");

// extends/pewarisan

interface AnimalInterface {
  name: string;
}

interface DogInterface extends AnimalInterface {
  bark(): void;
}

let myDog: DogInterface = {
  name: "kyra",
  bark() {
    console.log("woof");
  },
};

// implementasi classes
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

const logger = new ConsoleLogger();
logger.log("Hello, world!");

// declaration merging
interface UserProfileInteface {
  id: number;
  name: string;
}
interface UserProfileInteface {
  email: string;
  age?: number; //property optional
}

let adminUser: UserProfileInteface = {
  id: 1,
  name: "kyra",
  email: "kyra@.com",
};

// type digunakan untuk alias

type UserIDType = string;

type StatusType = "complete" | "incomplete"; // hanya bisa diisi oleh value tersebut

type Car = {
  brand: string;
  model: string;
  year: number;
};

// interface => extends, type => intersection (&)
type HasNameType = {
  name: string;
};

type HasAgeType = {
  age: number;
};

type PersonInfoType = HasNameType & HasAgeType;

let person: PersonInfoType = {
  name: "kyra",
  age: 20,
};

// mapped type
type Point2DType = {
  x: number;
  y: number;
};

type ReadonlyPointType = {
  readonly [P in keyof Point2DType]: Point2DType[P];
};

// gunakan interface untuk object
// gunakan type untuk aliasing
