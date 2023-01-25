import style from "./Header.module.scss";
import Menu from "../../componets/Menu/Menu";
import steakLogo from "../../assets/steak-logo.png";

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.wrap}>
          <div className={style.logo}>
            <h2>Food is art</h2>
            <img src={steakLogo} alt="Logo" />
          </div>
          <Menu />
        </div>
      </header>
    </>
  );
};
export default Header;
