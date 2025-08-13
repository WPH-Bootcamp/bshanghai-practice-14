// function return data type

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => a - b;

interface CallbackFunction {
  (data: string, status: boolean): void;
}

const callback: CallbackFunction = (data: string, status: boolean) => {
  console.log(data, status);
};

// function void
// void adalah tipe data yang tidak seharusnya mengembalikan nilai
const sayHello = (): void => {
  console.log("hello");
  //   return; // no issue
};

// function parameter (optional, default value)
//default param
let sayHi = (message: string, name: string = "user"): void => {
  // optional param
  // let sayHi = (message: string, name?: string ): void => {
  console.log(`Hi, there's a message from ${name}: ${message}`);
};

sayHi("hello", "kyra");
sayHi("hello");
