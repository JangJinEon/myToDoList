import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const AdminMenubar = () => {

    // hook
    const [isAdminSignIned, setIsAdminSignIned] = useState(false);

    return(
        <>
            <div className="admin-menubar">
                <Link to='/'>User Mode</Link>
                {
                    isAdminSignIned
                    ?
                    <>
                        <Link to='/adminsignin'>Admin SignOut</Link>
                        <Link to='/adminmemberlist'>User MemberList</Link>
                    </>
                    :
                    <>
                        <Link>Admin Signin</Link>
                    </>
                }
            </div>
            <Outlet />
        </>
    );
}

export default AdminMenubar;