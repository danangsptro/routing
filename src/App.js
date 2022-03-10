import React, { useCallback, useEffect, useState } from "react";

import { GetUser } from "./Api/User";
import Input from "./Components/Input/Input";

export const App = () => {
  const [input, setinput] = useState([])
  const [toggle, settoggle] = useState(false)
  const getApi=async()=>{
    const res=await GetUser()
    console.log(res)
  }
  useEffect(() => {
    getApi()//same like didMount method
  
    return () => {
      //disni will run when component unmount
    }
  }, [
    //when this array change, this function will run
  ])
  
 
  console.log("app")
  return (
    <div style={{width:1000,height:100}}>
      <h1>s</h1>
      </div>
  )
}




// export default App;
export default App;

