
import { useState } from 'react'
import './App.css'

function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirm,setConfirm] = useState("");

  return (
<main>
    <div id='email-container'>
      <label  className=''>Email:</label><br/>
      <input type='email' id="email" style={{border:`1px solid ${email?"green":"red"}`}} onInput={(e)=>{
        setEmail(checkMail(e.target.value))
      }}></input>
      <p className='error' style={{color:`${email?"green":"red"}`}}>{email ? "You got it 👍": "Invalid Email format"}</p>
    </div>
    <div id='password-container'>
      <label >Password:</label><br/>
      <input type='password' style={{border:`1px solid ${password?"green":"red"}`}} id="password" onInput={(e)=>{
          setPassword(e.target.value.length>7 ? e.target.value : false)
          console.log(password);
      }}></input>
      <p className='error' style={{color:`${password?"green":"red"}`}}>{password ? "You got it 👍": "short password length"}</p>
    </div>
    <div id='confirmPassword-container'>
      <label >Confirm password: </label><br/>
      <input id="confirmPassword" style={{border:`1px solid ${confirm?"green":"red"}`}} onInput={(e)=>{
        let value= e.target.value;
        setConfirm (value == password)
      }}></input>
      <p className='error' style={{color:`${confirm?"green":"red"}`}} >{confirm ? "You got it 👍": "Passwords donot match"}</p>
    </div>
    <button onClick={()=>{
      alert( password && email && confirm ? "Successfully submitted" : "Form Cannot Be submited")
    }}>Submit</button>
</main>
  )
}

function checkMail(mail)
{
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(mail)? mail : false;
}

export default App
