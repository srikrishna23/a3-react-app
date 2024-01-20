import {React,useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("Enter text")
    const handleChange = (event)=>{
        setText(event.target.value)
    }
    const toUpperCase = ()=>{
        setText(text.toUpperCase())
    }
    const toLowerCase = ()=>{
        setText(text.toLowerCase())
    }
    const clear = ()=>{
        setText("")
    }
    
  return (
    <div className='container'>
      <div className="mb-3">
        <h4>Enter the text below:</h4>
        <textarea className={`form-control text-${(props.mode==='light')?"black":"white"} bg-${(props.mode==='light')?"white":"secondary"}`} value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <div className='container'>{text.length} characters & {text.split(" ").length} words & {text.split("\n").length} lines</div>
      <button type="button" onClick={toUpperCase} className="btn btn-primary my-3 mx-1">Upper Case</button>
      <button type="button" onClick={toLowerCase} className="btn btn-success my-3 mx-1">Lower Case</button>
      <button type="button" onClick={clear} className="btn btn-warning my-3 mx-1">Clear</button>
      <h2>Your text summary :</h2>
      <p>{text}</p>
      </div>
  )
}