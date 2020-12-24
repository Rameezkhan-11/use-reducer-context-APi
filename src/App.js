import React, { useState } from 'react';
import './App.css';
import Context from './Context';
import Parent from './Parent';


function App() {
  let counter = useState(0);
  console.log(counter);
  
    return (
<>
<Context.Provider value={counter}>
<Parent />
</Context.Provider>



  
</>
  );
}

export default App;
