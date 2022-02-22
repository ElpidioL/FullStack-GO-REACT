package structure

type Register struct {
	Email    string `json:"email"`
	Name     string `json:"name"`
	Password string `json:"password"`
	Intent   string `json:"intent"`
}
