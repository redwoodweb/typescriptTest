import { testFunc } from "./exporttest.js";
const tayoBus = {
    brand: 'aaa',
    color: 'blue',
    maxPeople: 30,
    price: 3000,
    isPrivate: false
};
console.log(tayoBus.maxPeople);
const checkBusTime = (bus) => {
    return new Date();
};
let dayCheck = checkBusTime(tayoBus);
console.log(testFunc(dayCheck.getDay()));
const returnTestfunc = (isBoolean, isSetence) => {
    return {
        result: `${isSetence} mission completed!!`
    };
};
console.log(returnTestfunc(true, "returnTestfunc maded").result);
