import { useReducer } from "react"

const initialState =[]

const TODOS_ACTIONS = {
    ADD_TASK:"add_task",
    DELETE_TASK:"delete_task",
    RESET_TODOS: "reset_todos"
}

       
function reducer(state,action) {
    switch (action.type) {
        case TODOS_ACTIONS.ADD_TASK : return[
            ...state,
            {
                id:state.length +1,
                name: action.payload
            }
        ];
        case TODOS_ACTIONS.DELETE_TASK: 
        return state.filter(d=> d.id !== action.payload)
        
        case TODOS_ACTIONS.RESET_TODOS: return init(action.payload)
            
            
    
        default: return state;
            
    }
}

function init(initialstate){

    // const result = [...initialstate,{id: "1", name: "reading"}]
    return initialState;
}

    
export default function Todos() {
    const [todos, dispatch] = useReducer(reducer,initialState,init);
  return (
    <div >
        <h1>TodoList {todos.length}</h1>
        Add New Task:
        <input style={{border:"solid 3px"}} type="text" onBlur={(e)=>dispatch({type:TODOS_ACTIONS.ADD_TASK, payload: e.target.value})}  />

        <button className="btn btn-outline-success" onClick={()=>dispatch({type: TODOS_ACTIONS.RESET_TODOS,payload:initialState})} >Reset</button>
        
        {todos.map(todo => <li key={todo.id}>{todo.name}
            <span>
                <button className="btn btn-outline-danger" onClick={()=>dispatch({type:TODOS_ACTIONS.DELETE_TASK, payload:todo.id })}>
                    Delete
                </button>
            </span>
            </li>)}
    </div>
  )
}









