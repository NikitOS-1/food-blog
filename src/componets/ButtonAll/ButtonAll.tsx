import { NavLink } from "react-router-dom";
import "./ButtonAll.scss";

type Props = {
  to: string;
  children: string;
};

const ButtonAll = ({ children, to }: Props) => {
  return (
    <div className="btn">
      <NavLink to={to} className="btn-text">
        {children}
      </NavLink>
    </div>
  );
};

export default ButtonAll;
