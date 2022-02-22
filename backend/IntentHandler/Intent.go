package IntentHandler

import (
	"fmt"
	DB "server/react/PSDB"
	Defaults "server/react/Structure"
)

func Intentions(choice *Defaults.Register) {

	if choice.Intent == "register" {
		err := DB.UserRegister(choice.Email, choice.Name, choice.Password)
		fmt.Println(err, "register")
	}
	if choice.Intent == "login" {
		err := DB.LoginUser(choice.Email, choice.Password)
		fmt.Println(err)
	}
}
