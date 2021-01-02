import React, { useState } from 'react';
import './App.css';
import Child from './Child';
import Context from './Context';
import Parent from './Parent';


function App() {
  let counter = useState(0);

  
    return (
<>
<Context.Provider value={counter}>
  
  <Parent />
  <Child />
</Context.Provider>

</>

  

  );
}

export default App;
