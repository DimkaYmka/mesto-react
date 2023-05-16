import logo from '../images/header_logo.svg';
import { Routes, Route, Link } from 'react-router-dom';

function Header() {

  return (
    <header className="header">
      {/* <Link to='/'> */}
        <img src={logo} alt="логотип социальной сети Mesto" className="header__logo" />
      {/* </Link> */}

      {/* <Routes>
        <Route path='/signin' element={
          <Link to='/signup' className='header__link'>
            Регистрация
          </Link>
        } />

        <Route path='/signup' element={
          <Link to='/signin' className='header__link'>
            Войти
          </Link>
        } />

      </Routes> */}
    </header>


  )
};

export default Header;