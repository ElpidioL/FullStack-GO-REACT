package PasswordHandler

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/mail"
	"strings"

	"golang.org/x/crypto/bcrypt"
)

type Register struct {
	Email    string `json:"email"`
	Name     string `json:"name"`
	Password string `json:"password"`
	Intent   string `json:"intent"`
}

func Hash(password string) (string, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(hash), err
}
func CheckHash(password string, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}
func CheckPassword(password string) error {
	spaces := strings.Fields(password)
	if len(password) < 8 || len(password) > 100 || len(spaces) > 1 || strings.HasSuffix(password, " ") || strings.HasPrefix(password, " ") {
		return errors.New("Password Invalid.")
	}
	return nil
}
func CheckEmail(email string) error {
	if len(email) == 0 {
		return errors.New("Email Invalid.")
	}
	_, err := mail.ParseAddress(email)
	if err != nil {
		return errors.New("Email not valid")
	}
	return nil
}
func CheckName(name string) error {
	if len(name) < 6 || len(name) > 100 {
		return errors.New("Name Invalid.")
	}
	return nil
}

func Sanitizer(passJson string) (Register, error) {
	registerUser := Register{}
	err := json.Unmarshal([]byte(passJson), &registerUser)
	if err != nil {
		return registerUser, errors.New("Couldn't parse the json.")
	}

	//basic verifications.
	if registerUser.Intent == "register" {
		err := CheckPassword(registerUser.Password)
		if err != nil {
			return registerUser, err
		}
		err = CheckEmail(registerUser.Email)
		if err != nil {
			return registerUser, err
		}
		err = CheckName(registerUser.Name)
		if err != nil {
			return registerUser, err
		}
		passwordHash, err := Hash(registerUser.Password)
		if err != nil {
			fmt.Println(passwordHash)
			return registerUser, errors.New("Fail to hash")
		}

	} else if registerUser.Intent == "login" {

		err := CheckPassword(registerUser.Password)
		if err != nil {
			return registerUser, err
		}
		err = CheckEmail(registerUser.Email)
		if err != nil {
			return registerUser, err
		}
	}
	//err = DB.UserRegister(registerUser.Email, registerUser.Name, passwordHash)
	//fmt.Println(err)
	return registerUser, nil
}

//errors.New("empty name")
