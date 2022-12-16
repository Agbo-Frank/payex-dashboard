import { createContext, useState } from "react";

export const adminContext = createContext(null);

const AdminContextProvider = (props) => {
    const [token, setToken] = useState();
    const [adminProfile, setAdminProfile] = useState();

    return <adminContext.Provider value={{token, setToken, adminProfile, setAdminProfile}}>
        {props.children}
    </adminContext.Provider>
}

export default AdminContextProvider;