import React,{useState} from 'react';


export default function TextForm(props) {

    const handleUppercaser = () => {
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handleLowercaser = () => {
      let newText = text.toLowerCase();
      setText(newText);

  }

    const handleClear = () => {
      let newText = "";
      setText(newText);

  }

    const handleTrim = () => {
      //let newFont = fontList[Math.floor(Math.random()*fontList.length)]
      let newText = text.trim();
      setText(newText);

  }

    const handleCopy = () => {
      let text = document.getElementById('MyBox');
      text.select();
      navigator.clipboard.writeText(text.value);

  }


    const handleFontChanger = () => {
      var newText = document.getElementById("MyBox");
      let newFont = fontList[Math.floor(Math.random()*fontList.length)]
      newText.style.fontFamily = 'Arial';
      setText(newText);

}


    const handleOnChange = (event) => {
        setText(event.target.value);

    }

    const[text,setText] = useState('');

    
    var fontList = ['Avenir','Arial','Arial-bold','Baskerville-Bold','Copperplate','Friz-Quadrata','Garamond-Bold','Futura-Bold','Garamond-Bold-Italic','Helvetica','Optima','Ribbon','Palatino-Semi-Bold']

  return (
    <>
    <div className = "container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="TextBox" className="Form-label"></label>
     
          <textarea className="Form-control" value = {text} onChange = {handleOnChange} id="MyBox" rows="8" ></textarea>
         
          <div className="container">
            <button className="btn btn primary mx-3" onClick = {handleUppercaser}>Convert to UPPERCASE</button>
            <button className="btn btn primary mx-3" onClick = {handleLowercaser}>Convert to lowercase</button>
            <button className="btn btn primary mx-3" onClick = {handleClear}>Clear text</button>
            <button className="btn btn primary mx-3" onClick = {handleTrim}>Trim</button>
            <button className="btn btn primary mx-3" onClick = {handleCopy}>Copy Text</button>
            <button className="btn btn primary mx-3" onClick = {handleFontChanger}>Font Changer</button>
          </div>
        </div>
    </div>

  <div className="container my-2">
    <h2>Text Summary</h2>
    <p>number of words is {text.split(" ").length} and charachters are {text.length}</p>
    <p>{(text.split(" ").length)*0.008} minutes read</p>    
  </div>
  
  </>

  )

}
