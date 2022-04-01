import React,{useState,useContext} from "react";
import { MovieContext } from "./MovieContext";

const AddMovies = () => {
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [movies,setMovies] = useContext(MovieContext);
const updateName=(e)=>{
    e.preventDefault();
    setName(e.target.value);
}

const updatePrice=(e)=>{
    e.preventDefault();
    setPrice(e.target.value);
}
const addMovies=(e)=>{
    e.preventDefault();
    setMovies(prevMovies=>[...prevMovies, {name:name , price:price}])
}
  return (
    <form onSubmit={addMovies}>
      <input 
      type="text"
      name="ad"
      value={name}
      onChange={updateName}
      placeholder="name" />
      <br />
      <br />
      <input 
      type="text"
      name="qiymet"
      value={price}
      onChange={updatePrice}
      placeholder="price" />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default AddMovies;
