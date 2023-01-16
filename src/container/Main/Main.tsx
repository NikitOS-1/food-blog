import style from "./Main.module.scss";
import ButtonAll from "../../componets/ButtonAll/ButtonAll";

type Props = {};
const Main = (props: Props) => {
  return (
    <div className={style.main}>
      <div className={style.title}>ЕДА КАК ИСКУССТВО</div>
      <div className={style.about}>ФОТОГРАФИЯ</div>
      <ButtonAll text={"Смотреть работы"} />
    </div>
  );
};
export default Main;
