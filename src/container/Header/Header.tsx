import style from "./Header.module.scss";
import Menu from "../../componets/Menu/Menu";

type Props = {};

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <h2>Еда как искусство</h2>
        </div>
        <Menu />
      </header>
    </>
  );
};
export default Header;
