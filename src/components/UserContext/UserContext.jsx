import React from "react";
import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState ([
        {id: 1, name: "Nazmul", position: "Front End Developer", salary: 28000},
        {id: 2, name: "Hasan", position: "Back End Developer", salary: 26000},
        {id: 3, name: "Himel", position: "Full Stack Developer", salary: 30000},
    ]);

    return(
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
};
