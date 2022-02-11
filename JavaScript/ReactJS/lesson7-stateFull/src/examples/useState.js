
// function App(){
//     return(
//         <h1>Hello1</h1>
//     )
// }

const App =(props)=>{
    const [say, hadise] = useState(props.qeder);
    const addCount=()=>{
        if(say>0){
            hadise(say-1)
        }
    }
    return(
        <div>
        <p>U Clicked: {say}</p>
        <button onClick={addCount}>-1</button>
        <button onClick={()=>{hadise(say+1)}}>+1</button>
        </div>

    )
}
App.defaultProps={
    qeder:0
}