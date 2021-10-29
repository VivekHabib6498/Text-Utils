import React, { useState } from "react";

export default function TextArea(props) {
  const handleUpClick = () => {
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to UpperCase", "success");
  }
  const handleOnChange = (event) => {
      setText(event.target.value);
  }
  const handleLowClick = () => {
      let LowerText = text.toLowerCase();
      setText(LowerText)
      props.showAlert("Converted to LowerCase", "success")
  }
  const handleCopy = () =>{
      let text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection.removeAllRanges();
      props.showAlert("Copied to Clipboard", "success")
  }
  const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Space has been removed", "success")
  }
  const handleClearClick = () =>{
      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared", "success")
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 className='mb-3'>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}
