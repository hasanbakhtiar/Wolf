import React,{useEffect, useState} from 'react'; 
import ReactDOM from 'react-dom'; 
// Life Cycle

const App =()=>{
    useEffect(()=>{
        console.log('static');
    },[])
    useEffect(()=>{
        console.log('update');
    })
    const [count, action] = useState(0);
    return(<div>
        <h1>Count: {count}</h1>
        <p></p>
        <button onClick={()=>{action(count + 1)}}>+1</button>
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector("#root"));