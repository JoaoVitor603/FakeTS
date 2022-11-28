import logoHeader from "./../../img/logoHeader.svg";
import logoLogout from "./../../img/ic-logout.svg";
import style from "./style.module.scss";

const Header: React.FC = () => (
  <header className={style.header__container}>
    <nav className={style.header__nav}>
      <span className={style.header__left}>
        <img src={logoHeader} alt="TimeSheet Logo" />
      </span>
      <span className={style.header__left}>
        <p>Planilha</p>
      </span>
    </nav>
    <nav className={style.header__right}>
      <ul>
        <li className={style.header__right__hello}>Olá,</li>
        <li className={style.header__right__name}>João Vitor.</li>
        <li className={style.header__right__version}>Versão 10.0.0</li>
        <li>
          <img
            className={style.header__logout}
            src={logoLogout}
            alt="Logout Button"
          />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
