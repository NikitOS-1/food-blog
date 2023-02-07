import "./Menu.scss";
import MenuItem from "./MenuItem";

type Props = {};
const Menu = (props: Props) => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <MenuItem to="/">Home</MenuItem>
          </li>
          <li>
            <MenuItem to="categories">Categories</MenuItem>
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
