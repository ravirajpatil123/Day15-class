import { useState } from "react";
function App(){
  return( <>
   <h1>Counter App</h1>
   <CounterApp/>
  </>
  );
}

function CounterApp(){
  let[counter,setCounter] = useState(1);
  let likeMeAction=()=>{
    counter =counter + 1;
    console.log("i am btn clicked",counter);
    setCounter(counter);
  }
  let disLikeMeAction=()=>{
    counter =counter + 1;
    console.log("i am btn clicked",counter);
    setCounter(counter);
  }

  return <>
  <h1>{counter}</h1>
  <input type="button" value="Click Me" onClick={likeMeAction} />
  <input type="button" value="Click for dislike Me" onClick={disLikeMeAction} />
  </>
}


export default App;

