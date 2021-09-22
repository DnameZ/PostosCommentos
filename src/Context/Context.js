import React,{createContext,useState} from 'react';

import PropTypes from 'prop-types';


const Context=createContext();


const ContextProvider = ({children}) => {
    let [Posts,SetPosts]=useState([]);
    let [Users,SetUsers]=useState([]);
    let [Id,SetId]=useState();
    let [UserId,SetUserId]=useState();

    const GetUserName=(id)=>
    {
        let newUserName=Users.find((user)=>user.id===id);

        return  newUserName?.username;
    }

    return ( 
        <Context.Provider
          value={{
            UserId,
            SetUserId,
            GetUserName,
            Posts,
            SetPosts,
            Users,
            SetUsers,
            Id,
            SetId}}
        >
            {children}
        </Context.Provider>
     );
}
 
export {Context,ContextProvider}