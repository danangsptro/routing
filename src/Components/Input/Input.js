
import React from "react";

function Input({setTest,tes}){
    const temp=React.useCallback(
      () => {
        setTest("s")
      },
      [tes],
    )
    console.log("input")
    
    return (
        <input placeholder="sss" onChange={function (e){
           temp()
        }}/>
    )

}
// const InputMemo=React.memo(Input)
export default Input