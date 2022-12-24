import React, {useState} from 'react'


export default function TextForm(probs) {
    const [text, setText] = useState('');

    const handleOnChange = (event)=> {
        setText(event.target.value)
    }
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
    }
  return (
    <>
    <div className="container">
        <h1>{probs.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver to LowerCase</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
</>
    
  )
}
