import { useState } from "react";
export default function Calculator(){
    const [Number1,SetNumber1]=useState();
    const [Number2,SetNumber2]=useState();
    const [Result,SetResult]=useState();
    const [Valid,setValid]=useState(false)
    const [Valid2,setValid2]=useState(false)
    function tinh(tt)
    {
        let so1=parseFloat(Number1)
        let so2=parseFloat(Number2)
        switch (tt)
        {
            case '+':
                SetResult(so1+so2)
                break;
            
            case '-':
                SetResult(so1-so2)
                break
            
            case '*':
                SetResult(so1*so2)
                break
            case '/':
                if(so2 == 0)
                {
                    alert("Khong chia cho 0")
                }
                else{
                    SetResult(so1/so2)        
                }
                break
        }

       
    }
    function isnumber(s)
    {
        return !isNaN(parseFloat(s))
    }
    return (
        
       <div>
        <div>
        <input type="text" value={Number1} onChange={(e) => {SetNumber1(e.target.value); {setValid(isnumber(e.target.value))}}} ></input>
        </div>
        <div>
        <input type="text" value={Number2} onChange={(e) => {SetNumber2(e.target.value); {setValid2(isnumber(e.target.value))}}}></input>
        </div>
        <div>
                <button disabled={!Valid || !Valid2} onClick={() => tinh("+")}>+</button>
                <button disabled={!Valid || !Valid2} onClick={() => tinh("-")}>-</button>
                <button disabled={!Valid || !Valid2} onClick={() => tinh("*")}>*</button>
                <button disabled={!Valid || !Valid2} onClick={() => tinh("/")}>/</button>
            </div>
            <p>Result: {Result}</p>
       </div>
    );

}


  