import React, {useEffect, useState}  from "react";
import API from "./utils/API";


function App() {
  const [data, setData]= useState(null)
  useEffect (()=> {
    API.getUser().then(({data})  => {
      const{results}= data
      setData(results)
    })
  },[])
  console.log (data)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
