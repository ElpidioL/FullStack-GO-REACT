package PasswordHandler

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/mail"
	DB "server/react/PSDB"

	"golang.org/x/crypto/bcrypt"
)

type Register struct {
	Email    string `json:"email"`
	Name     string `json:"name"`
	Password string `json:"password"`
}

func Hash(password string) (string, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(hash), err
}
func CheckHash(password string, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func Sanitizer(passJson string) (bool, error) {
	registerUser := Register{}
	err := json.Unmarshal([]byte(passJson), &registerUser)
	if err != nil {
		return false, errors.New("Couldn't parse the json.")
	}

	//basic verifications.
	if len(registerUser.Email) == 0 || len(registerUser.Name) < 6 || len(registerUser.Password) < 8 || len(registerUser.Name) > 100 || len(registerUser.Password) > 100 {
		return false, errors.New("Something is empty or invalid")
	}
	_, err = mail.ParseAddress(registerUser.Email)
	if err != nil {
		return false, errors.New("Email not valid")
	}

	passwordHash, err := Hash(registerUser.Password) // ignore error for the sake of simplicity
	if err != nil {
		return false, errors.New("Fail to hash")
	}

	err = DB.UserRegister(registerUser.Email, registerUser.Name, passwordHash)
	fmt.Println(err)
	return true, nil
}

//errors.New("empty name")
