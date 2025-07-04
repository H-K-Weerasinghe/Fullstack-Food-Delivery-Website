
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = (setShowingLogin) => {

    const [currState,setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
     <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowingLogin(false)} src={assets.cross_icon} alt="close" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>: <input type="text" placeholder='Your name' required/>}
           
            <input type="email" placeholder='Your email' required/>
             <input type="password" placeholder='Password' required/>
        </div>
        <button>{currState==="Sign Up"?"Create a account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, I agreeto the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"?
        <p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
        <p>Alredy have an Account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
    }
        
        
     </form>
    </div>
  )
}

export default LoginPopup
