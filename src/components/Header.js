import logo from '../images/header_logo.svg';

function Header() {

  return (
    <header className="header">
      <img src={logo} alt="логотип социальной сети Mesto" className="header__logo" />
    </header>
  )
};

export default Header;