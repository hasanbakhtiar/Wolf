import { useState,createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props =>{
    const [movies,setMovies] = useState([
        {
            name:"Interstellar",
            price: "10",
            id: 12231
        },

        {
            name:"Inseption",
            price: "10",
            id: 12531
        },

        {
            name:"Batman",
            price: "10",
            id: 122310
        },
      
    ])
    return(
<MovieContext.Provider value={[movies,setMovies]}>
    {props.children}
</MovieContext.Provider>
    )
}