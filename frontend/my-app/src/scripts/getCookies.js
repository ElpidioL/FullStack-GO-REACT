export function GetColour(){
    let value = document.cookie.split(/[;= ]+/);
    for (let i = 0; i < value.length; i++){
        if (value[i] === `Colour`){
            return value[i+1]
        }
    }
}
export function GetEmail(){
    let value = document.cookie.split(/[;= ]+/);
    for (let i = 0; i < value.length; i++){
        if (value[i] === `Email`){
            return value[i+1]
        }
    }
}
export function GetCredits(){
    let value = document.cookie.split(/[;= ]+/);
    for (let i = 0; i < value.length; i++){
        if (value[i] === `Credits`){
            return value[i+1]
        }
    }
}
export function GetInfo(){
    let value = document.cookie.split(/[;= ]+/);
    for (let i = 0; i < value.length; i++){
        if (value[i] === `Info`){
            return value[i+1]
        }
    }
}
export function GetUpdate(){
    let value = document.cookie.split(/[;= ]+/);
    for (let i = 0; i < value.length; i++){
        if (value[i] === `Last`){
            return value[i+1]
        }
    }
}