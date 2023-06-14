import {useState} from "react";

function App(){
  return(
    <>
    <h1>Counter App</h1>
  <CounterApp/>
  <CounterApp/>
  <CounterApp/>
  <CounterApp/>


    </>
  )
};

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
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, corrupti eligendi. Aspernatur illo ab veniam deserunt molestiae excepturi repellat qui, animi accusantium quam exercitationem et consectetur sit placeat error rerum.</h5>
    <h1>{counter} <input type="button" value="Like Me" onClick={likeMeAction} /></h1>
  
    
    </>
  )
}
export default App;