import { useState,useEffect } from "react"

function App(){
    const [count,setcount] = useState(0)

    useEffect(()=>{
        console.log("show message in console when button is clicked")
    })
    return(
        <>
        <h1>react build project</h1>
        <h1>count : {count}</h1>
        <button onClick={()=> setcount(count+1)}>click</button>
        </>
    )
}
export default App