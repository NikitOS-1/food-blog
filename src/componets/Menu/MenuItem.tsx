import { NavLink } from "react-router-dom";
import "./MenuItem.scss";

type Props = {
  to: string;
  children: string;
};

const MenuItem = ({ to, children }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "menu-item-active" : "menu-item"
      }>
      {children}
    </NavLink>
  );
};

export default MenuItem;
