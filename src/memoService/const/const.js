export const MEMBER_DB_IN_LOCAL_STORAGE = 'memoServiceMemberDB';
export const MEMO_DB_IN_LOCAL_STORAGE = 'memoServiceMemoDB';

// FUNCTION
// MEMBER
export const getMemoServiceMemberDB = () => {
    console.log('getMemoServiceMemberDB()');

    return localStorage.getItem(MEMBER_DB_IN_LOCAL_STORAGE);

}

export const setMemoServiceMemberDB = (memDBJsObj) => {
    console.log('setMemoServiceMemberDB()');

    localStorage.setItem(MEMBER_DB_IN_LOCAL_STORAGE, JSON.stringify(memDBJsObj));

}

export const getMyMemObj = (uId) => {
    console.log('getMyMemObj()');

    let memDBInStorage = getMemoServiceMemberDB();      // String
    let memDBJsObj = JSON.parse(memDBInStorage);        // JS Object (All member)

    return memDBJsObj[uId];

}


// MEMO
export const getMemoServiceMemoDB = () => {
    console.log('getMemoServiceMemoDB()');

    return localStorage.getItem(MEMO_DB_IN_LOCAL_STORAGE);

}

export const setMemoServiceMemoDB = (memoDBJsObj) => {
    console.log('setMemoServiceMemoDB()');

    return localStorage.setItem(MEMO_DB_IN_LOCAL_STORAGE, JSON.stringify(memoDBJsObj));

}

export const getMyMemoObjs = (uId) => {
    console.log('getMyMemoObjs()');

    let memoDBInStorage = getMemoServiceMemoDB();   // String
    let memoJsObj = JSON.parse(memoDBInStorage);    // Object(ALL)
    let myMemoObjs = memoJsObj[uId];                // Object(My)

    return myMemoObjs;

}

export const setMyMemoObjs = (uId, myMemoObjs) => {
    console.log('setMyMemoObjs()');

    let memoDBInStorage = getMemoServiceMemoDB();   // String
    let memoObj = JSON.parse(memoDBInStorage);      // Object
    memoObj[uId] = myMemoObjs;

    setMemoServiceMemoDB(memoObj);
     
}

export const getToBeModifiedMemoObj = (uId, key) => {
    console.log('getToBeModifiedMemoObj()');

    let memoDBInStorage = getMemoServiceMemoDB();   // String
    let memoDBJsObj = JSON.parse(memoDBInStorage);  // Object
    let myMemos = memoDBJsObj[uId];                 // my memos
    let toBeModifiedMemoObj = myMemos[key];         // my memo

    return toBeModifiedMemoObj;

}
