import React, { useState } from 'react'
import './register.css'

import  email    from '../assets/email.png'
import password from '../assets/password.png'
import user from '../assets/user.png'
const LOGIN = () => {
    const [Action,SetAction] =useState("Sign Up");
  return (
   <div className='container'>
        <div className=' header'>
            <div className='text'> {Action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {Action==='login'?<div></div>: <div className='input'>
                <img src={user} alt=''></img>
                <input type='text' placeholder='Name'></input>
            </div>}
        
            {/* 2 */}
            <div className='input'>
                <img src={email} alt=''></img>
                <input type='email' placeholder='Email'></input>
            </div>
            {/* 3 */}
            <div className='input'>
                <img src={password} alt=''></img>
                <input type='password' placeholder='Password'></input>
            </div>
        </div>
        {Action==="Sign Up"?<div></div>: <div className="forget-password"> forget pass:<span>click here</span></div>}

        <div className='submit-container'>
            <div className={Action==="login"?"submit gray":"submit"} onClick={()=>{SetAction("Sign UP")}}> Sign Up</div>
            <div className={Action=== "Sign Up"?"submit gary":"submit"} onClick={()=>{SetAction("login")}}>login</div>
        </div>

   </div>
  )
}
export default LOGIN
