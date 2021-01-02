import React, { useContext } from 'react';
import Context from './Context';


const Parent = () =>{
let counter = useContext(Context)



return(
<>

<h1>Counter {counter}

</h1>
<button onClick={()=>{counter[1]( ++counter[0] )}}>Increment</button>



</>
)




}
export default Parent;