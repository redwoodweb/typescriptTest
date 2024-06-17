// const testFunc = (num: Date) : string => {
//     let dayNum:number | string = num.getDay();
//     switch(dayNum){
//         case 0: dayNum = "일";
//         break;
//         case 1: dayNum = "월";
//         break;
//         case 2: dayNum = "화";
//         break;
//         case 3: dayNum = "수";
//         break;
//         case 4: dayNum = "목";
//         break;
//         case 5: dayNum = "금";
//         break;
//         case 6: dayNum = "토";
//         break;
//     }
//     return `오늘은 ${dayNum}입니다.`
// }

// let resultNum: string = testFunc(new Date());
// console.log(resultNum);

const testFunc = (num: number) : string => {
    let dayNum:number | string = num;
    switch(dayNum){
        case 0: dayNum = "일";
        break;
        case 1: dayNum = "월";
        break;
        case 2: dayNum = "화";
        break;
        case 3: dayNum = "수";
        break;
        case 4: dayNum = "목";
        break;
        case 5: dayNum = "금";
        break;
        case 6: dayNum = "토";
        break;
    }
    return `오늘은 ${dayNum}입니다.`
}

interface Car{
    brand: string;
    color: string;
    maxPeople: number;
}

interface Bus extends Car{
    price: number;
    isPrivate: boolean
}

const tayoBus : Bus = {
    brand: 'aaa',
    color: 'blue',
    maxPeople: 30,
    price: 3000,
    isPrivate: false
}

console.log(tayoBus.maxPeople);

const checkBusTime = (bus: Bus): Date => {
    return new Date();
}

let dayCheck = checkBusTime(tayoBus);


console.log(testFunc(dayCheck.getDay()));


const returnTestfunc = (isBoolean: boolean, isSetence: string): {
    result: string 
} => {
    return {
        result: `${isSetence} mission completed!!`
    }
}

console.log(returnTestfunc(true, "returnTestfunc maded").result);
