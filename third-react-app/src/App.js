
function App(){
  return<>
    {/* <h1>Hello World</h1> */}
    <AppHeader/>
    <AppBody/>
    <AppFooter/>

  </>
}

function AppHeader(){
  return <>
  
  <div className="row bg-danger p-3  text-dark">
  <div className="col-3 fs-1">Home</div>
  <div className="col-3 text-dark fs-1">Project</div>
  <div className="col-3 text-dark fs-1">AboutUs</div>
  </div>
  </>
}

function AppBody(){
  return <>
  <div className="alert alert-success fs-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos sunt qui nisi, nobis ducimus tempora ex. Reiciendis quos corporis placeat aliquam, blanditiis hic porro rerum quo nostrum dolorem maxime.
  </div>
  
  
  </>
}
function AppFooter(){
 return <>
 <div className="bg-secondary text-light d-flex justify-content-center align-item-center" style={{height:"40px"}}>lorem aj kajd
 </div>
 </>
}

export default App;