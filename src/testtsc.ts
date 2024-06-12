// let test: string = "this is string type"
// console.log(test);
// document.cookie = `test: '이건먹는쿠키아님'`
// console.log(`쿠키값 가져오기: ${document.cookie}`);
function setCookie(cookieName, value, expirationDays) {
    const date = new Date();
    date.setDate(date.getDate() + expirationDays);
    document.cookie = `${cookieName}=${value}; expires=${date.toString()}; path=/`;
}

// 사용 예시
setCookie('userName', 'jane', 7); // 7일 동안 유지되는 'userName' 쿠키 생성

function eraseCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}
eraseCookie('test'); // 모든 쿠키 삭제