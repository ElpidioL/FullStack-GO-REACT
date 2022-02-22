package IntentHandler

import (
	"fmt"
	DB "server/react/PSDB"
	Defaults "server/react/Structure"
)

func Intentions(choice *Defaults.Register) string {

	if choice.Intent == "register" {
		err := DB.UserRegister(choice.Email, choice.Name, choice.Password)
		if err != nil {
			return fmt.Sprintf(`{"intent":"error", "msg":"%s"}`, err.Error())
		}
		return `{"intent":"Sucess", "msg":"Sucess"}`
	}
	if choice.Intent == "login" {
		err := DB.LoginUser(choice.Email, choice.Password)
		if err != nil {
			fmt.Println("deu ruim")
			return fmt.Sprintf(`{"intent":"error", "msg":"%s"}`, err.Error())
		}
		fmt.Println("não deu ruim")
		return `{"intent":"token","token":"5asd415asd4", "pass": "paçoca" }`
	}
	return `{"intent":"error", "msg":"NotSure"}`
}
