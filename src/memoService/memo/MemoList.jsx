import React, { useEffect, useState } from "react";
import { getMyMemoObjs, setMyMemoObjs } from '../const/const.js';
import { getLoginedSessionID } from '../session.js';
import { convertMapToArray } from '../utils.js';
import MemoModifyModal from "./MemoModifyModal.jsx";
import '../style/memoModifyModal.css';

const MemoList = () => {

    // hook
    const [myMemoArr, setMyMemoArr] = useState([]);
    const [keyToBeModified, setKeyToBeModified] = useState('');
    const [showMemoModifyModal, setShowMemoModifyModal] = useState(false);
    const [tempFlag, setTempFlag] = useState(false);

    useEffect(() => {
        console.log('useEffect()');

        let myMemoObjs = getMyMemoObjs(getLoginedSessionID());
        setMyMemoArr(convertMapToArray(myMemoObjs).reverse());

    }, [tempFlag, showMemoModifyModal]);

    // hander
    const modifyBtnClickHandler = (e, key) => {
        console.log('modifyBtnClickHandler()');

        setKeyToBeModified(key);
        setShowMemoModifyModal(true);

    }

    const deleteBtnClickHandler = (e, key) => {
        console.log('deleteBtnClickHandler()');

        let result = window.confirm('Really?');
        if (result) {
            let myMemoObjs = getMyMemoObjs(getLoginedSessionID());
            delete myMemoObjs[key];

            setMyMemoObjs(getLoginedSessionID(), myMemoObjs);

            alert('DELETE MY MEMO SUCCESS!!');
            
            setTempFlag(p => !p);

        } else {
            alert('DELETE MY MEMO CANCELED!!');

        }

    }

    return(
        <div id="memo_list">
            <ul>
                {
                    myMemoArr.map((myMemo, idx) => 
                            <li key={idx} style={{
                                textAlign: 'left',
                            }}>
                                [<span style={{
                                    display: 'inline-block', 
                                    width: '150px'
                                }}>{myMemo.key}</span>]
                                &nbsp;&nbsp;
                                <span style={{
                                    display: 'inline-block', 
                                    width: '250px'
                                }}>{myMemo.mTxt}</span>
                                &nbsp;&nbsp;
                                {myMemo.mRegDate}
                                &nbsp;&nbsp;
                                {myMemo.mModDate}
                                &nbsp;&nbsp;
                                <button className="basic_btn" onClick={(e) => modifyBtnClickHandler(e, myMemo.key)}>MOD</button>
                                <button className="basic_btn" onClick={(e) => deleteBtnClickHandler(e, myMemo.key)}>DEL</button>
                            </li>
                    )
                }
            </ul>

            {
                showMemoModifyModal
                ?
                <div className="modalBg">
                    <div className="modal">
                        <MemoModifyModal 
                            keyToBeModified={keyToBeModified} 
                            setShowMemoModifyModal={setShowMemoModifyModal}/>
                        <button className="basic_btn" onClick={() => {
                            console.log('MODIFY CANCEL BUTTN CLICKED!!');

                            setKeyToBeModified('');
                            setShowMemoModifyModal(false);

                        }}>MODIFY CANCEL</button>
                    </div>
                </div>
                :
                null
            }
            

        </div>
    );
}

export default MemoList;