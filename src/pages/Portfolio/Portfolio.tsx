// import ButtonAll from "../../componets/ButtonAll/ButtonAll";
import style from "./Portfolio.module.scss";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div className={style.portfolio}>
      <div className={style.meat}>
        <h1>Meat</h1>
        {/* <ButtonAll to="/articles">See more</ButtonAll> */}
      </div>
      <div className={style.fish}>Fish</div>
      <div className={style.dishes}>Dishes</div>
    </div>
  );
};

export default Portfolio;
