import React, {useState} from 'react'
import '../css/Login.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
const Login = () => {

   const [action, setAction] = useState("Sign Up");
    
  return (
    <div className='loginsignup'>
    <div className='container5'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"? <div></div>: <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name'/>
        </div>}
        
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id'/>
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password'/>
        </div>
      </div>
      {action==="Sign Up"? <div></div>:
       <div className="forgot-password">Forgot Password?  <span><a href="URL">Click Here!</a></span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"? "submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"? "submit gray": "submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
    </div>
  )
}

export default Login
