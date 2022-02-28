import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

const baslangicState = {
  count: 0
};

const store = createStore((state = baslangicState, action) => {
  // Reducer start
  switch (action.type) {
    case "ARTIR":
      return {
        count: state.count + 1,
      };

    case "AZALT":
      return {
        count: state.count - 1,
      };

      case "RESET":
      return {
        count: 0,
      };

    default:
      return state;
  }
  // Reducer end
});
// burada cagirmaq = dispatch-dir

store.subscribe(()=>{
console.log(store.getState());

})

store.dispatch({
  type: "ARTIR"
})
// store.dispatch({
//   type: "ARTIR"
// })
// store.dispatch({
//   type: "ARTIR"
// })
// store.dispatch({
//   type: "RESET"
// })







const App = () => {
  return <h1>Hello</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
