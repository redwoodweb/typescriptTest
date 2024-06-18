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
