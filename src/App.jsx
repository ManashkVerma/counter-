import { useState } from 'react';
import './App.css'
function App() {

  const [counter, setCounter] = useState(0)


  function addvalue(){
    setCounter(counter+1);
  }
  
  function delvalue(){
    setCounter(counter<1?0:counter-1);
  }
  return (
    <>
      <h1>Chai aur react </h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addvalue}>Counter +</button>
      <br />
      <button onClick={delvalue}>Counter -</button>
    </>
  )
}

export default App
