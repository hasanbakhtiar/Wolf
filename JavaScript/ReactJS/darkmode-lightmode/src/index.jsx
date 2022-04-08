import React,{useState, useEffect} from 'react'; 
import ReactDOM from 'react-dom'; 
import ModeTop from './ModeTop';
import ModeBtn from './ModeBtn';
import './sass/style.css';

const App =()=>{
    const [mode, setMode] = useState('light');
    useEffect(()=>{
        document.body.className = mode;
    },[mode])
    return(
        <>
        <ModeTop color={mode}/>
        <ModeBtn color={mode} setColor={setMode}/>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));