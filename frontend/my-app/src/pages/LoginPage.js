import { connect, register } from "../Api/socketConnection";
import { verify } from "../scripts/passwordVerify";
import { useRef, useState } from "react";
import classes from "./LoginPage.module.css";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


class Register {
  constructor(name, password) {
    this.name = name 
    this.password = password
  }
}

function LoginPage(){
  const navigate = useNavigate();
  const [count, setCount] = useState("");
  let error = "azir"
  let rt = new Register()
  let inputEl = new Register()
  inputEl.name  = useRef(null);
  inputEl.password = useRef(null);



  function send(){
    rt.name = inputEl.name.current.value
    rt.password  =  inputEl.password.current.value
    
    if(verify(rt.password, rt.name)){
      connect();
      register(rt);
      navigate("/register");
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
        <form className={classes.loginForm}>
          <h3>Login Here</h3>
          <label htmlFor ="Email">Email</label>
          <input type="email" placeholder="Email" id="Email"  ref={inputEl.name}/>

          <label htmlFor ="password" >Password</label>
          <input type="password" placeholder="Password" id="password" ref={inputEl.password}/>

          <Link to="/Register" className={classes.link}>Register</Link>

          <button onClick={send} type="button" className={classes.buttonForm}> Log In</button>
          <div>{count}</div>
        </form> 
      </div>
    );

}

export default LoginPage;

/* class RegisterPage extends Component {
    constructor(props)  {
      super(props);
      connect();
    }
    
    send() {
      console.log("hello");
      sendMsg("this.divRef.current.value");
    }
  
    render() {
      return (
        <div className="App">
          <input type="text" />
          <button onClick={this.send}>Hit</button>
        </div>  
      );
    }
  }
  
export default RegisterPage; */