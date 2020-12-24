import React, { useContext, useReducer } from 'react';
import Context from './Context';
import Reduce from './Reduce';

const Parent = () =>{
let counter = useContext(Context)
const [c, cR] = useReducer(Reduce,1)


return(
<>

<h1>Counter {counter}

</h1>
<button onClick={()=>{counter[1]( ++counter[0] )}}>Increment</button>


<h1>Reducer {c}</h1>

<button onClick={()=>{cR('INCREMENT')}}>Click Reducer</button>

</>
)




}
export default Parent;