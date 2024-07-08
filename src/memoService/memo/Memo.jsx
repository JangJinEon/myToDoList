import React, { useState } from "react";
import { getMyMemoObjs, setMyMemoObjs } from '../const/const.js';
import { getLoginedSessionID } from '../session.js';
import { getCurrentDateTime } from '../utils.js';

const Memo = (props) => {

    // hook
    const [memoTxt, setMemoTxt] = useState('');

    // handler
    const memoTxtChangeHandler = (e) => {
        console.log('memoTxtChangeHandler()');

        setMemoTxt(e.target.value);

    }

    const writeBtnClickHandler = () => {
        console.log('writeBtnClickHandler()');
        
        let myMemoObjs = getMyMemoObjs(getLoginedSessionID());
        myMemoObjs[getCurrentDateTime()] = {
            'mTxt' : memoTxt,
            'mRegDate' : getCurrentDateTime(),
            'mModDate' : getCurrentDateTime(),
        }

        setMyMemoObjs(getLoginedSessionID(), myMemoObjs);

        alert('MEMO WRITE SUCCESS!!');

        props.homeViewer(false);
        props.signUpViewer(false);
        props.signInViewer(false);
        props.modifyViewer(false);
        props.memoViewer(false);
        props.memoListViewer(true);

    }

    return(
        <div id="memo">
            <input 
                type="text" 
                name="mTxt" 
                className="txt_field" 
                onChange={memoTxtChangeHandler} 
                placeholder="Input memo" />
            <button 
                className="basic_btn" 
                onClick={writeBtnClickHandler}>
                    WRITE
                </button>
        </div>
    );
}

export default Memo;