import ButtonAll from "../../componets/ButtonAll/ButtonAll";
import style from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={style.home}>
      <div className={style.title}>Food is art</div>
      <div className={style.about}>Photos</div>
      <ButtonAll to="/categories">See more</ButtonAll>
    </div>
  );
};

export default Home;
