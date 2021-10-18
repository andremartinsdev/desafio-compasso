import React, { useState, createContext } from "react";

export const context = createContext();

export const ContextProvider = props => {
    const [ userData, setUserData ] = useState({});
    const [ userStarred, setUserStarred ] = useState(0);
    const [ userRepos, setUserRepos ] = useState([]);
    const [ userStarredData, setUserStarredData ] = useState([]);

    return (
        <context.Provider value={{
            userData,
            setUserData,
            userStarred,
            setUserStarred,
            userRepos,
            setUserRepos,
            userStarredData,
            setUserStarredData
        }}>
            {props.children}
        </context.Provider>
    )
}