import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React,{useState} from 'react';

function App() {
  const[mode,setMode] = useState('light');

const toggleMode = () => {
  if(mode == 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#383f45';
  }
  else if(mode == 'dark'){
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
  
}

  return (
    <>
      <Navbar  mode = {mode} toggleMode={toggleMode} /> 
      <div className = 'container'>
        <TextForm heading = "Enter the text here" mode = {mode}/>
      </div>
  </>
  );
}

export default App;