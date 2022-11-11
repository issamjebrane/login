import './App.css';
import Form from "./Form.js"
import React , {useEffect,useState} from 'react';
function App() {
  const [backendData,setBackendData] = useState([{}]);
  useEffect(()=>{
    fetch("/api").then(
      respone=>{
        respone.json()
      }
    ).then(
      data=>{
        setBackendData(data)
      }
    )
  },[])
  return 
}

export default App;
