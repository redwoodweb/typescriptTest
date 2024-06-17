let sentence: string = "this is string type variable";
let numberNum: number =  30;
let arrayNum: Array<number> =[30,2,4,5];
let objectNum: {[key:string]: any} = { obj: "this is object type"};
// let objectNum: object = { obj: "this is object type"};
console.log(sentence);
console.log(numberNum);
console.log(arrayNum);
console.log(objectNum.obj);

// uninon type
let unionNum: string | number = 12345;

unionNum = "this is union type that has multi type as string or number and so on";
console.log(unionNum);
unionNum = "this can has chaged type as string to number";
console.log(unionNum);
// this data type is occured error when used unspecified data type like this code
// unionNum = true;

// literal type
let literalNum : 1 | 2 | 3 = 3;
console.log(literalNum);
literalNum = 2
console.log(literalNum);
// literalNum = 5
// console.log(literalNum);
