import style from "./Menu.module.scss";
import MenuItem from "./MenuItem";

type Props = {};
const Menu = (props: Props) => {
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <li>
            <MenuItem to="/">Home</MenuItem>
          </li>
          <li>
            <MenuItem to="portfolio">Portfolio</MenuItem>
          </li>
          <li>
            <MenuItem to="articles">Articles</MenuItem>
          </li>
          <li>
            <MenuItem to="favorites">Favorites</MenuItem>
          </li>
          <li>
            <MenuItem to="about">About</MenuItem>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Menu;
