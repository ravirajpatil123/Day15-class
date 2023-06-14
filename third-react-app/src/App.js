import {useState} from "react";

function App(){
  return(
    <>
    <h1>Counter App</h1>
    <CounterApp/>
    </>
  )
}

function CounterApp(){
  // let counter=1; // stateless
  //  let list=useState(1); //stateful
  //  let [counter,setCounter]=list;
   let [counter,setCounter] =useState(1);

   //member function
   let likeMeAction = () =>{
      counter = counter+1;
      console.log(counter);
      setCounter(counter);
   }
  return(
    <>
    <h1>{counter}</h1>
    <h1>{counter}</h1>
    <h1>{counter}</h1>
    <input type="button" value="Like Me" onClick={likeMeAction} />
    </>
  )
}
export default App;