package IntentHandler

import (
	"fmt"
	DB "server/react/PSDB"
	pass "server/react/PasswordHandler"
	Defaults "server/react/Structure"
)

func Intentions(choice *Defaults.Register) string {

	if choice.Intent == "register" {
		err := DB.UserRegister(choice.Email, choice.Name, choice.Password)
		if err != nil {
			return fmt.Sprintf(`{"intent":"error", "msg":"%s"}`, err.Error())
		}
		return `{"intent":"success", "msg":"sucess"}`
	}
	if choice.Intent == "login" {
		err := DB.LoginUser(choice.Email, choice.Password)
		if err != nil {
			return fmt.Sprintf(`{"intent":"error", "msg":"%s"}`, err.Error())
		}
		fmt.Println(err)
		token, err := pass.CreateToken()
		if err != nil {
			return fmt.Sprintf(`{"intent":"error", "msg":"Fail to create Colour"}`)
		}
		return fmt.Sprintf(`{"intent":"colour","colour":"%s"}`, token)
	}
	return `{"intent":"error", "msg":"NotSure"}`
}
