export function GetCookies(){
    let value = document.cookie.split(/[;= ]+/);

    for (let i = 0; i < value.length; i++){
        if (value[i] === `Colour`){
            window.colour = value[i+1]
        }
        if (value[i] === `Email`){
            window.email = value[i+1]
        }
    }
}