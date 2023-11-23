import { useReducer} from "react"

 function counterReducer(state,action) {
    switch (action.type) {
        case "increment":
            return {count:state.count +1};
        case"decrement":
            return{count:state.count -1};
        case"reset":
            return{count:0};
        default:
            throw Error("invalid action");
    }
}

export default function Counter() {
 const [state, dispatch] = useReducer(counterReducer,{count:0});


  return (
    <>
    <h1>{state.count}</h1>

    <button onClick={()=> dispatch({type:"increment"})} >increment</button>
    <button onClick={()=> dispatch({type:"decrement"})} >decrement</button>
    <button onClick={()=> dispatch({type:"reset"})}>reset</button>
    </>
  )
}

