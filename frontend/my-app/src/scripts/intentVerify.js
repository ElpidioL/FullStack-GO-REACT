
let Intent = (json) => {
    if (json.intent === "error"){
        console.log(json)

    }else if(json.intent === "success"){
        console.log(json)

    }else if(json.intent === "colour"){
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 30);
        document.cookie = `Colour=${json.colour}; expires=${expireDate}`;
        document.cookie = `Email=${json.email}; expires=${expireDate}`;
    }
}

export {Intent};