function closePopup() {
    // const date = new Date()
    // const getScon = date.getSeconds()
    // const expSec = date.setSeconds(getScon + 10);
    // console.log(expSec);
    // console.log(date);
    document.cookie = `popup=none; max-age=10; path=/`;
    document.getElementById('popup').style.display = 'none';
}
const cookieData = document.cookie;
if (cookieData.indexOf('popup=none') < 0) {
    document.getElementById('popup').style.display = 'block';
}
else {
    document.getElementById('popup').style.display = 'none';
}
// let test: string = "this is string type"
// console.log(test);
// document.cookie = `test: '이건먹는쿠키아님'`
// console.log(`쿠키값 가져오기: ${document.cookie}`);
// function setCookie(cookieName, value, expirationDays) {
//     const date = new Date();
//     date.setDate(date.getDate() + expirationDays);
//     document.cookie = `${cookieName}=${value}; expires=${date.toString()}; path=/`;
// }
// // 사용 예시
// setCookie('userName', 'jane', 7); // 7일 동안 유지되는 'userName' 쿠키 생성
// function eraseCookie(name) {
//     document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
// }
// eraseCookie('test'); // 모든 쿠키 삭제
// function setCookie( cookieName:string, value:string, expires: number){
//     const date = new Date();
//     console.log(`현재날짜: ${date.getDate()}`);
//     const expDay = date.setDate(date.getDate() + expires);
//     console.log(typeof(expDay));
//     console.log(`종료날짜: ${date.getDate()}`);
//     console.log(`사용자 이름: ${value}`);
//     document.cookie = `${cookieName} = ${value}; expires = ${expDay.toString}; path = /`;
//     console.log(document.cookie);
// }
// function getCookie( cookieName:string ){
//     console.log(document.cookie.match(`(^|;) ?${cookieName}=([^;]*)(;|$)`)[2]);
// }
// function getCookie( cookieName:string ){
//     console.log(document.cookie.match(`${cookieName}`).input);
// }
// setCookie('userName', 'tomson', 3);
// getCookie('userName');
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
const testFunc = (num) => {
    let dayNum = num;
    switch (dayNum) {
        case 0:
            dayNum = "일";
            break;
        case 1:
            dayNum = "월";
            break;
        case 2:
            dayNum = "화";
            break;
        case 3:
            dayNum = "수";
            break;
        case 4:
            dayNum = "목";
            break;
        case 5:
            dayNum = "금";
            break;
        case 6:
            dayNum = "토";
            break;
    }
    return `오늘은 ${dayNum}입니다.`;
};
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
const iponeX = {
    maker: "apple",
    name: "iponeX",
    bettery: 2030,
    colorNo: 304,
    created_at: new Date(2024),
    features: ['slim', 'camera50000']
};
const gallexy20 = {
    maker: "samsung",
    name: "gallexy20",
    bettery: 2030,
    colorNo: 255,
    created_at: new Date(2024),
    features: ['slim', 'camera80000']
};
console.log(iponeX.maker);
console.log(iponeX.features[0]);
console.log(gallexy20.maker);
console.log(gallexy20.features[0]);
let sentence = "this is string type variable";
let numberNum = 30;
let arrayNum = [30, 2, 4, 5];
let objectNum = { obj: "this is object type" };
// let objectNum: object = { obj: "this is object type"};
console.log(sentence);
console.log(numberNum);
console.log(arrayNum);
console.log(objectNum.obj);
// uninon type
let unionNum = 12345;
unionNum = "this is union type that has multi type as string or number and so on";
console.log(unionNum);
unionNum = "this can has chaged type as string to number";
console.log(unionNum);
// this data type is occured error when used unspecified data type like this code
// unionNum = true;
// literal type
let literalNum = 3;
console.log(literalNum);
literalNum = 2;
console.log(literalNum);
// literalNum = 5
// console.log(literalNum);
