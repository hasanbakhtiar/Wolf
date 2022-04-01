import { useState,createContext } from "react";

export const BasicContext = createContext();

export const BasicProvider = props =>{
    const [state,setState] = useState([
       {
           a:"a"
       }
      
    ])
    return(
<BasicContext.Provider value={[state,setState]}>
    {props.children}
</BasicContext.Provider>
    )
}


