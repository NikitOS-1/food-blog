import style from "./Home.module.scss";
import ButtonAll from "../../componets/ButtonAll/ButtonAll";

type Props = {};
const Home = (props: Props) => {
  return (
    <div className={style.home}>
      <div className={style.title}>ЕДА КАК ИСКУССТВО</div>
      <div className={style.about}>ФОТОГРАФИЯ</div>
      <ButtonAll text={"Смотреть работы"} />
    </div>
  );
};
export default Home;
