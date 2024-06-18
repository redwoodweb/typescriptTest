export let testNumNum = "successed!! import!!";
export const testFunc = (num) => {
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
