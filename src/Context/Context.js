import React,{createContext,useState} from 'react';

const Context=createContext();


const ContextProvider = ({children}) => {
    let [Posts,SetPosts]=useState([]);
    let [Users,SetUsers]=useState([]);
    return ( 
        <Context.Provider
          value={{Posts,SetPosts,Users,SetUsers}}
        >
            {children}
        </Context.Provider>
     );
}
 
export {Context,ContextProvider}