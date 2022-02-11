
// class App extends Component{
//     componentDidMount(){
//         console.log("componentDidMount is running...");
//         const infoFunc=()=>{
            

//         }
//         setTimeout(infoFunc, 3000);
//     }
//     constructor(props){
//         super(props);
//         console.log("constructor is running...");
//         this.addCount = this.addCount.bind(this);
//         this.state={
//             count:0
//         }
//     }


//     componentDidUpdate(){
//         console.log("update");
//         document.querySelector('h2').style.color='red';
//         const text = document.querySelector('p');
//         text.innerHTML = "Hello";
//     }
//     addCount(){
//         this.setState(
//           {count: this.state.count+1}
//       )
//   }
//     render(){
//         return(
//             <div id='sec'>
//                 <button onClick={this.addCount}>add</button>
//                 <h2>U Clicked {this.state.count}</h2>
//                 <p></p>
                
//             </div>
//         )
//     }
// }