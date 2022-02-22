import { connect, login } from "../Api/socketConnection";
import { Verify } from "../scripts/passwordVerify";
import { useRef, useState } from "react";
import classes from "./LoginPage.module.css";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


class Register {
  constructor(email, password) {
    this.email = email 
    this.password = password
  }
}

function checkLogin(){
 /*  if(!token) {
    return <Login setToken={setToken} />
  } */
/*   const [user, setUser] = useState()
  const loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {
    const foundUser = JSON.parse(loggedInUser);
    console.log(foundUser)
    setUser(foundUser);
  } */
}

function LoginPage(){
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [token, setToken] = useState();
  let rt = new Register()
  let inputEl = new Register()
  inputEl.email  = useRef(null);
  inputEl.password = useRef(null);
  
  function send(){
    rt.email = inputEl.email.current.value
    rt.password  =  inputEl.password.current.value
    if(Verify(rt.password, rt.email)){
      connect();
      login(rt);
      
    }else{
      setError(<p className={classes.error}>Weak Password or Login, Password should be at least 8 characters long</p>)
    }
  }

  
    return (
      <div>
        <div className={classes.background}>
          <div className={classes.shape}></div>
          <div className={classes.shape}></div>
        </div>
        <form className={classes.loginForm}>
          <h3>Login Here</h3>
          <label htmlFor ="Email">Email</label>
          <input type="email" placeholder="Email" id="Email"  ref={inputEl.email}/>

          <label htmlFor ="password" >Password</label>
          <input type="password" placeholder="Password" id="password" ref={inputEl.password}/>

          <Link to="/Register" className={classes.link}>Register</Link>

          <button onClick={send} type="button" className={classes.buttonForm}> Log In</button>
          <div>{error}</div>
        </form> 
      </div>
    );

}

export default LoginPage;
