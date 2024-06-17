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

