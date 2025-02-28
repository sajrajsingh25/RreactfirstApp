
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {

  const[mode,setMode] = useState('light'); //whter dark mode is enable or not 
  const[alert,setAlert] = useState(null);

  const  showAlert =(message,type) =>{
    setTimeout(() => setAlert(false), 5000); //
  setAlert({
    msg: message,
    type: type
          })
          }


const toggleMode= ()=>{
  if(mode === 'light'){
  setMode('dark');
  
  showAlert("Darkmode is enabled","sucess");
  document.body.style.backgroundColor='grey';

}
else{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("light is enabled","sucess");

    }
  }
  return (
  <>
 
<Navbar title="Hi Sajraj"  mode={mode} welcome="Welcome" toggleMode={toggleMode}>
</Navbar>
<Alert   alert={alert}> </Alert>

<div className='container'>

      <TextForm heading="Enter the text"/>

      </div>

    
{/* <About></About> */}


  </>
  );
}

export default App;
