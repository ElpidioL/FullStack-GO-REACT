import classes from "./IndexPage.module.css";
import { Connect,Colour,  } from "../Api/socketConnection";
import { useState } from "react";



function IndexPage(props){
  const [info, setInfo] = useState("");
  
  function LoadConfig() {
    Connect();
    Colour(props.Auth, props.Email);
  }
  setTimeout(LoadConfig, 50);
 
  let test = false
    if(test){
      return (
        <div className={classes.IndexPage}>
            <h3>Login Here</h3>
            <h1>sadasdasd</h1>
            <p>adasdasd</p>
        </div>
      )
    }else{
      return (
      <div className={classes.IndexPage}>
        <h1>Loading...</h1>
      </div>
      )
    }
}

export default IndexPage;
