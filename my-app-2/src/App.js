import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React,{useState} from 'react';

function App() {
  const[darkMode,setDarkMode] = useState('false');
  return (
    <>
      <Navbar  mode = {darkMode} /> 
      <div className = 'container'>
        <TextForm heading = "Enter the text here"/>
      </div>
  </>
  );
}

export default App;