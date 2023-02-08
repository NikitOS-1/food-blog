import style from "./Share.module.scss";
import ReactCSSTransitionGroup from "react-transition-group";

type Props = {
  handleShare: (bool: boolean) => void;
  id: number;
  image: string;
  title: string;
};
const Share = ({ handleShare, id }: Props) => {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.close} onClick={() => handleShare(false)}>
          X
        </div>
        <p>http://localhost:3000/articles/{id}</p>
      </div>
    </>
  );
};
export default Share;
