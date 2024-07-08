import React from "react";

const Wrap = () => {

    let nums = [10, 20, 30, 40, 50, 60, 70];

    return(
        <>
            <ul>
                {
                    nums.map((n) => <li>{n}</li>)
                }
            </ul>
        </>
    );
}

export default Wrap;