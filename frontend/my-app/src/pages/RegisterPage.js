import { connect, register } from "../Api/socketConnection";
import { Verify } from "../scripts/passwordVerify";
import { useRef, useState } from "react";
import classes from "./RegisterPage.module.css";

class Register {
  constructor(email, name, password) {
    this.email = email
    this.name = name 
    this.password = password
  }
}

function RegisterPage(){
  const [count, setCount] = useState("");
  let rt = new Register()
  let inputEl = new Register()
  inputEl.email  = useRef(null);
  inputEl.name  = useRef(null);
  inputEl.password = useRef(null);



  function send(){
    rt.email = inputEl.email.current.value
    rt.name = inputEl.name.current.value
    rt.password  =  inputEl.password.current.value
    if(Verify(rt.password, rt.name)){
      connect();
      register(rt);
      setCount(<p className={classes.sucess}>Successfully registered</p>)
    }else{
      setCount(<p className={classes.error}>Weak Password or Login, Password should be at least 8 characters long</p>)
    }
  }

  
    return (
      <div>
        <div className={classes.background}>
          <div className={classes.shape}></div>
          <div className={classes.shape}></div>
        </div>
        <form>
          <h3>Register Here</h3>
          <label htmlFor ="email">Email</label>
          <input type="email" placeholder="email" id="email"  ref={inputEl.email}/>

          <label htmlFor ="username">Name</label>
          <input type="text" placeholder="Name" id="username"  ref={inputEl.name}/>

          <label htmlFor ="password" >Password</label>
          <input type="password" placeholder="Password" id="password" ref={inputEl.password}/>

          <button onClick={send} type="button">Log In</button>
          <div>{count}</div>
        </form> 
      </div>
    );

}

export default RegisterPage;
