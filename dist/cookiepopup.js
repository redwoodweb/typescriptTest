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
