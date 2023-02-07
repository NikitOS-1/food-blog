import ButtonAll from "../../componets/ButtonAll/ButtonAll";
import Carousele from "../../componets/Carousele/Carousele";
import style from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={style.home}>
      <Carousele />
      <div className={style.title}>Food is art</div>
      <div className={style.about}>Photos</div>
      <ButtonAll to="/categories">See more</ButtonAll>
    </div>
  );
};

export default Home;
