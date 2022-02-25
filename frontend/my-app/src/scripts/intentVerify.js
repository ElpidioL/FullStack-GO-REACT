import { useNavigate } from "react-router-dom";

let Intent = (json) => {
    if (json.intent === "error"){

    }else if(json.intent === "success"){

    }else if(json.intent === "colour"){
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 30);
        document.cookie = `Colour=${json.colour}; expires=${expireDate}`;
    }
}

export {Intent};

/* var value = document.cookie;
console.log(value) */