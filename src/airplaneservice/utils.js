// dev or prod flag
let prodFlag = false;

// export const setProdFlag = (flag) => {
//     prodFlag = flag;

// }

export const getProdFlag = () => {
    return prodFlag;
    
}

// get current time infos
export const getCurrentDateTime = () => {
    if (!getProdFlag()) console.log('getCurrentDateTime()');

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();

    return `${year}${month}${date}${hours}${minutes}${seconds}${milliseconds}`;

}
