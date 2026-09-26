import { useState,useEffect } from "react";

function App(){
  const [count,setcount] = useState(0)

  function increase(){
    setcount(count+1)
  }
  useEffect(()=> {
    console.log("show message on button click")
  })
  return(
    <>
    <button onClick={increase}>click</button>
    </>
  )
}
export default App