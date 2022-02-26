import classes from "./IndexPage.module.css";
import { Connect,Colour,  } from "../Api/socketConnection";
import { useState } from "react";
import { GetCookies } from "../scripts/getCookies";

function deleteCookies(){
  document.cookie = "Email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "Colour=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  GetCookies()
  function Nav() {
    window.location.reload();
  }
  setTimeout(Nav, 100); 
}

function IndexPage(){
  //const [info, setInfo] = useState("");
  function LoadConfig() {
    Connect();
    Colour(window.colour, window.email);
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
        <button onClick={deleteCookies}>clear</button>
      </div>
      )
    }
}

export default IndexPage;

