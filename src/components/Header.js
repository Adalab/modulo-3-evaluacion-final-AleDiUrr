import Logo from '../images/logowenw.jpeg';
import '../styles/components/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__img"
        src={Logo}
        title="logo of owen wilson"
        alt="logo owen wilson"
      />
    </header>
  );
};
export default Header;
