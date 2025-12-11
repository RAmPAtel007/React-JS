import { useState } from "react";
const Counter=()=>{
    const [count , SetCount] = useState(0);
    return(
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={()=>SetCount(count+1)}>Update Count</button> 
            {/* you can directly defined the function or can call the function without ()*/}
        </div>

    )
}

export default Counter;