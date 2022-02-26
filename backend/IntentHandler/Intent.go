package IntentHandler

import (
	"encoding/json"
	"fmt"
	DB "server/react/PSDB"
	pass "server/react/PasswordHandler"
	Defaults "server/react/Structure"
)

func Intentions(choice []byte) string {

	Intents := Defaults.IntentDefine{}
	err := json.Unmarshal([]byte(string(choice)), &Intents)
	if err != nil {
		return `{"intent":"error", "msg":"Fail to parse JSON"}`
	}

	if Intents.Intent == "colour" {
		LoginToken := Defaults.TokenAcess{}
		err = json.Unmarshal([]byte(string(choice)), &LoginToken)
		if err != nil {
			return `{"intent":"error", "msg":"Fail to parse JSON"}`
		}

	}

	if Intents.Intent == "register" || Intents.Intent == "login" {
		registerUser := Defaults.Register{}
		err = json.Unmarshal([]byte(string(choice)), &registerUser)
		if err != nil {
			return `{"intent":"error", "msg":"Fail to parse JSON"}`
		}
		registerUser, err = pass.Sanitizer(registerUser)
		if err != nil {
			return `{"intent":"error", "msg":"Fail to sanitize"}`
		}

		if Intents.Intent == "register" {
			err := DB.UserRegister(registerUser.Email, registerUser.Name, registerUser.Password)
			if err != nil {
				return fmt.Sprintf(`{"intent":"error", "msg":"%s"}`, err.Error())
			}
			return `{"intent":"success", "msg":"sucess"}`

		}
		if Intents.Intent == "login" {
			err := DB.LoginUser(registerUser.Email, registerUser.Password)
			if err != nil {
				return fmt.Sprintf(`{"intent":"error", "msg":"%s"}`, err.Error())
			}
			token, err := pass.CreateToken()
			if err != nil {
				return fmt.Sprintf(`{"intent":"error", "msg":"Fail to create Colour"}`)
			}
			return fmt.Sprintf(`{"intent":"colour","colour":"%s", "email":"%s"}`, token, registerUser.Email)
		}
	}
	return `{"intent":"error", "msg":"NotSure"}`
}
