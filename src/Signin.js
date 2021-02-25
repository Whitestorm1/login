import React, { useState } from 'react'
// import { auth,provider } from './Firebase';
import "./App.css"
import { auth, provider } from './Firebase';


function Signin() {
  const[name,Setname]=useState();
  const[user,Setuserinfo]=useState();
  const[password,Setpassword]=useState();
  const[email,Setemail]=useState();
  const[submit,setsubmit]=useState(false);
  
  const  onSubmit = () =>{
setsubmit(!submit)
    }
    const submit1=()=>{
      auth.signInWithPopup(provider).then(result=>{
        alert("succesfully login")
      })

    }

  
  return (
    <>
    <div>
      <div className="main">
        <form className="main-div" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="Name"
            placeholder="name"
            value={name}
            onChange={(e) => Setname(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => Setpassword(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="your email"
            value={email}
            onChange={(e) => Setemail(e.target.value)}
          />
          <button value="submit" onClick={(e) => setsubmit(true)}>
            submit
          </button>
          <button value="submit" onClick={submit1} >
            login with google
          </button>
        </form>
      </div>
      <div>{submit && (
        <>
      <h3>{email}</h3>
      <h3>{name}</h3>
      <h3>{password}</h3>
      </>)}</div>
    </div>
    </>
  );
}

export default Signin
