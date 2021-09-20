import React,{createContext,useState} from 'react';

const Context=createContext();


const ContextProvider = ({children}) => {
    let [Posts,SetPosts]=useState([]);
    return ( 
        <Context.Provider
          value={{Posts,SetPosts}}
        >
            {children}
        </Context.Provider>
     );
}
 
export {Context,ContextProvider}