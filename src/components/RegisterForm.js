function Register() {
  return (
    <div>
      <h2 className="login__title">Регистрация</h2>
        <form action="#" className="login__form"  noValidate>
          <input className="login__input login__input_email" id="input-url-login"  required type="email" name="link"
            placeholder="Email"  />
          <span className="login__input-error input-url-login-error "></span>
          <input className="login__input login__input_password" id="input-url-login"  required type="password" name="link"
            placeholder="Пароль"  />
          <span className="login__input-error input-url-login-error "></span>
          <button className="login__button" type="submit">Зарегестрироваться</button>
        </form>
        <a href="/" className="register-form__link">Уже зарегистрированы? Войти</a>
    </div>
  )
}

export default Register