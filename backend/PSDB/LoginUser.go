package PSDB

import (
	"database/sql"
	"errors"
	"fmt"
	sanitizer "server/react/PasswordHandler"
)

func LoginUser(email string, password string) error {
	//storing the info to access the DB
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		DbInfo.Host, DbInfo.Port, DbInfo.User, DbInfo.Password, DbInfo.Dbname)

	//starting db
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}
	//don't forget to close it
	defer db.Close()
	//ping to check if its working
	err = db.Ping()
	if err != nil {
		panic(err)
	}

	sqlStatement := `SELECT id,password FROM users WHERE email = $1`
	row := db.QueryRow(sqlStatement, email)
	var dbId string
	var dbPass string
	err = row.Scan(&dbId, &dbPass)

	switch err {
	case sql.ErrNoRows:
		return errors.New("Email or Password invalid")
	case nil:
		err := sanitizer.CheckHash(password, dbPass)
		if err != nil {
			return err
		}
		return nil

	default:
		panic(err)
	}
}
