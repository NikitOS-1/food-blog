import style from "./Menu.module.scss";

type Props = {};
const Menu = (props: Props) => {
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Портфолио</a>
          </li>
          <li>
            <a href="#">Обо мне</a>
          </li>
          <li>
            <a href="#">Книги</a>
          </li>
          <li>
            <a href="#">Блог</a>
          </li>
          <li>
            <a href="#">Связаться</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Menu;
