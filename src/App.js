import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState('')
  const [value1, setValue1] = useState('')
  const [form, setForm] = useState('')
  return (
    <div className="App">
      <form onSubmit={(e)=>{
        e.preventDefault();
        setForm({value,value1})
       setValue('')
       setValue1('')
       
       
      }}>
<input value={value1} onChange={(e)=>{
  setValue1(e.target.value)
}}/>
<input value={value} onChange={(e)=>{
  setValue(e.target.value)}}/>
<button type="submit">Submit</button>
      </form>

<h1>{form.value1} {form.value}</h1>
    
    </div>
  );
}
