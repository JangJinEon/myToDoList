// get current time infos
export const getCurrentDateTime = () => {
    console.log('getCurrentDateTime()');

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    if (month < 10) month = '0' + month;
    let date = now.getDate();
    if (date < 10) date = '0' + date;
    let hours = now.getHours();
    if (hours < 10) hours = '0' + hours;
    let minutes = now.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    let seconds = now.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;

    return `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;

}

export const convertMapToArray = (objs) => {
    console.log('convertMapToArray()');

    let myMemoKeys = Object.keys(objs);     // keys(Array)

    let myMemoArr = [];
    for (let i = 0; i < myMemoKeys.length; i++) {
        let memo = objs[myMemoKeys[i]];
        memo['key'] = myMemoKeys[i];
        myMemoArr.push(memo);

    }

    return myMemoArr;

}