import React, { useEffect, useState } from "react";
import { getToBeModifiedMemoObj, 
         getMyMemoObjs, 
         setMyMemoObjs } from '../const/const.js';
import { getLoginedSessionID } from '../session.js';
import { getCurrentDateTime } from '../utils.js';

const MemoModifyModal = (props) => {

    // hook
    const [mTxt, setMTxt] = useState('');
    const [mRegDate, setMRegDate] = useState('');
    const [mModDate, setMModDate] = useState('');

    useEffect(() => {
        console.log('useEffect()');

        let toBeModifiedMemoObj = getToBeModifiedMemoObj(getLoginedSessionID(), props.keyToBeModified);

        setMTxt(toBeModifiedMemoObj.mTxt);
        setMRegDate(toBeModifiedMemoObj.mRegDate);
        setMModDate(toBeModifiedMemoObj.mModDate);

    }, []);

    // handler
    const mTxtChangeHandler = (e) => {
        console.log('mTxtChangeHandler()');
        
        setMTxt(e.target.value);
        
    }
    
    const modifyBtnClickHandler = () => {
        console.log('modifyBtnClickHandler()');

        let myMemoObjs = getMyMemoObjs(getLoginedSessionID());
        myMemoObjs[props.keyToBeModified] = {
            'mTxt': mTxt,
            'mRegDate': mRegDate,
            'mModDate': getCurrentDateTime(),
            'key': props.keyToBeModified,
        }

        setMyMemoObjs(getLoginedSessionID(), myMemoObjs);
        props.setShowMemoModifyModal(false);

    }

    return(
        <div id="memo_modify">
            <input type="text" className="txt_field" name="mTxt" value={mTxt} onChange={mTxtChangeHandler}/>
            <button className="basic_btn" onClick={modifyBtnClickHandler}>MODIFY</button>
        </div>
    );
}

export default MemoModifyModal;