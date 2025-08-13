let mixedArray = ["kyra", 20, true];
// console.log(mixedArray[0].toUpperCase()); error

// 1. type[]

let numbers: number[] = [1, 2, 3, 4, 5, 6];

let names: string[] = ["kyra", "john", "jane"];

// 2. Array<type>
let cities: Array<string> = ["bandung", "jakarta", "medan"];

// 3. union type di array
let mixedDataArray: (string | number | boolean)[] = ["kyra", 20, true];

// multidimention array

let multiArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// readonly array
let readOnlyNumbers: readonly number[] = [1, 2, 3];

// readOnlyNumbers[0] = 10 // error

// ReadonlyArray<string>

console.log("coba jalanin ts di cmd");
