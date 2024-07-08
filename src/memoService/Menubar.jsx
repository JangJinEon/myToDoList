import React, { useState } from "react";
import Home from "./Home";
import SignUp from "./member/SignUp";
import SignIn from "./member/SignIn";
import Modify from "./member/Modify";
import Memo from "./memo/Memo";
import MemoList from "./memo/MemoList";

import { setLoginedSessionID, getLoginedSessionID } from './session.js';

const Menubar = () => {

    // hook
    const [isHome, setIsHome] = useState(true);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);
    const [isModify, setIsModify] = useState(false);
    const [isMemo, setIsMemo] = useState(false);
    const [isMemoList, setIsMemoList] = useState(false);

    const [isLogined, setIsLogined] = useState(false);

    // handler
    const homeClickHandelr = () => {
        console.log('homeClickHandelr()');
        
        setIsHome(true);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(false);

    }

    const signUpClickHandelr = () => {
        console.log('signUpClickHandelr()');
        
        setIsHome(false);
        setIsSignUp(true);
        setIsSignIn(false);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(false);

    }

    const signInClickHandelr = () => {
        console.log('signInClickHandelr()');
        
        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(true);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(false);

    }

    const signOutClickHandelr = () => {
        console.log('signOutClickHandelr()');

        setLoginedSessionID();      // Session change

        setIsHome(true);            // View change
        setIsSignUp(false);
        setIsSignIn(false);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(false);

        setIsLogined(false)         // Menu change
        
    }

    const modifyClickHandelr = () => {
        console.log('modifyClickHandelr()');

        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsModify(true);
        setIsMemo(false);
        setIsMemoList(false);

    }

    const memoClickHandelr = () => {
        console.log('memoClickHandelr()');
        
        if (getLoginedSessionID() === '') {
            
            alert('PLEASE SIGN-IN!!');

            setIsHome(false);
            setIsSignUp(false);
            setIsSignIn(true);
            setIsModify(false);
            setIsMemo(false);
            setIsMemoList(false);

            return;
        }

        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsModify(false);
        setIsMemo(true);
        setIsMemoList(false);

    }

    const memoListClickHandelr = () => {
        console.log('memoListClickHandelr()');

        if (getLoginedSessionID() === '') {
            
            alert('PLEASE SIGN-IN!!');

            setIsHome(false);
            setIsSignUp(false);
            setIsSignIn(true);
            setIsModify(false);
            setIsMemo(false);
            setIsMemoList(false);

            return;
        }

        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsModify(false);
        setIsMemo(false);
        setIsMemoList(true);
        
    }

    return(
        <div id="menubar">
            <div className="menus">
                <a href="#none" onClick={homeClickHandelr}>home</a>
                {
                    isLogined
                    ?
                    <>
                        <a href="#none" onClick={signOutClickHandelr}>sign-out</a>
                        <a href="#none" onClick={modifyClickHandelr}>modify</a>
                    </>
                    :
                    <>
                        <a href="#none" onClick={signUpClickHandelr}>sign-up</a>
                        <a href="#none" onClick={signInClickHandelr}>sign-in</a>
                    </>

                }
                <a href="#none" onClick={memoClickHandelr}>memo</a>
                <a href="#none" onClick={memoListClickHandelr}>memo-list</a>
            </div>
            {
                isHome
                ?
                    <Home />
                :
                null
            }

            {
                isSignUp
                ?
                    <SignUp 
                        homeViewer={setIsHome} 
                        signUpViewer={setIsSignUp} 
                        signInViewer={setIsSignIn} 
                        memoViewer={setIsMemo} 
                        memoListViewer={setIsMemoList} 
                    />
                :
                null
            }

            {
                isSignIn
                ?
                    <SignIn 
                        homeViewer={setIsHome} 
                        signUpViewer={setIsSignUp} 
                        signInViewer={setIsSignIn} 
                        memoViewer={setIsMemo} 
                        memoListViewer={setIsMemoList} 
                        changeMenuBar={setIsLogined}                        
                    />
                :
                null
            }

            {
                isModify
                ?
                    <Modify 
                        homeViewer={setIsHome} 
                        signUpViewer={setIsSignUp} 
                        signInViewer={setIsSignIn} 
                        modifyViewer={setIsModify}
                        memoViewer={setIsMemo} 
                        memoListViewer={setIsMemoList} 
                        changeMenuBar={setIsLogined}  
                    />
                :
                null
            }

            {
                isMemo
                ?
                    <Memo 
                        homeViewer={setIsHome} 
                        signUpViewer={setIsSignUp} 
                        signInViewer={setIsSignIn} 
                        modifyViewer={setIsModify}
                        memoViewer={setIsMemo} 
                        memoListViewer={setIsMemoList}
                    />
                :
                null
            }
            
            {
                isMemoList
                ?
                    <MemoList />
                :
                null
            }

        </div>
    );
}

export default Menubar;