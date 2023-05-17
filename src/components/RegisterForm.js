import { useState } from "react"
import { useNavigate } from "react-router-dom";
import auth from "../utils/Auth";
function Register() {

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })
const navigate = useNavigate();
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    // setFormValue(() => ({ ...formValue, [name]: value }))
    setFormValue({...formValue, [name]: value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // const {email, password} = formValue;
    console.log(formValue);
    auth.register( formValue.email,  formValue.password)
  
    .then(data => {
      console.log(data);
      navigate("/signin", { replace: true })
    })
    .catch(err => console.log(err));
    
  }

  return (
    <div>
      <h2 className="login__title">Регистрация</h2>
      <form action="#" className="login__form" onSubmit={handleSubmit} noValidate >
        <input className="login__input login__input_email" id="input-url-login" required type="email" name="email"
          placeholder="Email" onChange={handleChange} value={formValue.email} />
        <span className="login__input-error input-url-login-error "></span>
        <input className="login__input login__input_password" id="input-url-login" required type="password" name="password"
          placeholder="Пароль" onChange={handleChange} value={formValue.password} />
        <span className="login__input-error input-url-login-error "></span>
        <button className="login__button" type="submit">Зарегестрироваться</button>
      </form>
      <a href="/signin" className="register-form__link">Уже зарегистрированы? Войти</a>
    </div>
  )
}

export default Register