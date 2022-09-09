import React from 'react'
import './App.css';
import Parent from './Parent' ;
import counterContext
 from './CounterContext';
function App() {
  return (
<counterContext.Provider value={25}>
<div >
      <Parent/>
    </div>
</counterContext.Provider>
   
  );
}

export default App;
