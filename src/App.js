import React,{useState} from "react";
import "./style.css";

const App = () => {
  const [name, setName]=useState("");
  const[fullName, setfullName]=useState();

  const InputEvent= (event)=>{
    console.log(event.target.value)
    setName(event.target.value);
  }

  const onSubmit =() =>{
    setfullName(name);
    
  }


  return(
    <>
    <div>
    <h1>Hello {fullName}</h1>
    <input type="text" 
    placeholder= "Enter your Name"
    onChange={InputEvent}
    value={name}/>
    <button onClick={onSubmit}>click me</button>
    
    </div>
    </>


  );
}
export default App;