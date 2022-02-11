import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React,{useState} from 'react';

function App() {
  const[mode,setMode] = useState('light');

const toggleDarkMode = () => {
  if(mode == 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#383f45';
  }
  else if(mode == 'dark' || 'peach' || 'rainbow'){
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
  
}

const toggleRainbowMode = () => {
  if(mode === 'light' ){
    setMode('rainbow');
    document.body.style.backgroundColor = 'orange';
  }
  else if(mode == 'rainbow' || 'dark' || 'peach' ||'light'){
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
  
}


const togglePeachMode = () => {
  if( mode == 'light'){
    setMode('peach');
    document.body.style.backgroundColor = 'pink';
  }
  else if(mode == 'peach' || 'light' || 'dark' || 'rainbow'){
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
  
}

  return (
    <>
      <Navbar  mode = {mode} toggleDarkMode={toggleDarkMode} togglePeachMode={togglePeachMode} toggleRainbowMode={toggleRainbowMode}/> 
      <div className = 'container'>
        <TextForm heading = "Enter the text here" mode = {mode}/>
        
      </div>
  </>
  );
}

export default App;