import Logo from '../images/logo_owen.png';
import '../styles/components/Header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <div>
        <img
          className="header__img"
          src={Logo}
          title="owen wilson logo"
          alt="owen wilson logo"
        />
      </div>
    </header>
  );
};
export default Header;
