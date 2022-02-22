
let Intent = (json) => {
   console.log(json.intent)
    if (json.intent === "error"){

    }else if(json.intent === "success"){

    }else if(json.intent === "token"){
        //localStorage.setItem('user', json)
        //var x = localStorage.getItem('user');
       // console.log(x)
       //document.cookie = "name=John Doe; expires=Wed, 13 Jan 2021 12:00:00 UTC";
       document.cookie = json.token;
       var value = document.cookie;
       console.log(value)
    }

  
}

export {Intent};