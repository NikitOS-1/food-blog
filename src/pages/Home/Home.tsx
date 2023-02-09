import ButtonAll from "../../componets/ButtonAll/ButtonAll";
import Carousele from "../../componets/Carousele/Carousele";
import style from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={style.home}>
      <div className={style.carousel}>
        <Carousele />
      </div>
      <div className={style.titleAndBtn}>
        <div className={style.title}>Food is art</div>
        <div className={style.about}>
          <p>See the most</p>
          <p>delicious recipes</p>
        </div>
        <ButtonAll to="/categories">See more</ButtonAll>
      </div>
    </div>
  );
};

export default Home;
