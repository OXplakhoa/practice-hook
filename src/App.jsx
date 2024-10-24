import { useState } from 'react'
import './App.css'

const useInput  = (initValue,valid) => {
  const [value,setValue] = useState(initValue); 
  const onChange = (e) => {
    const {value} = e.target;
    let willUpdate = true;
    if(typeof(valid) === "function"){
      willUpdate = valid(value)
    }
    if(willUpdate){
      setValue(value);
    }
  }
  return {value,onChange};
}


function App() {
  const maxLen = value => value.length < 10
  const name = useInput("Mr.",maxLen)
  return (
    <>
      <h1>Hello</h1>
      <input {...name} type="text" placeholder='Name' />
    </>
  )
}

export default App
