import { useState } from "react"

export default function UseStatecounter() {
    const [count,setCount] = useState(0);
  return (
    <>
    <h1>{count}</h1>

    <button onClick={()=>setCount((c)=>c+1)} >increment</button>
    <button onClick={()=>setCount((c)=>c-1)} >decrement</button>
    <button onClick={()=>setCount(0)} >reset</button>
    </>
  )
}
