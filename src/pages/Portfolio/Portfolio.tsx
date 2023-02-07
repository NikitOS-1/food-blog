import ButtonAll from "../../componets/ButtonAll/ButtonAll";
import style from "./Portfolio.module.scss";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div className={style.portfolio}>
      {/* <div className={style.meat}>
        <h1>Meat</h1>
        <ButtonAll to="/articles/meat">See more</ButtonAll>
      </div>
      <div className={style.fish}>
        <h1>Fish</h1>
        <ButtonAll to="/articles/fish">See more</ButtonAll>
      </div>
      <div className={style.dishes}>
        <h1>Desserts</h1>
        <ButtonAll to="/articles/desserts">See more</ButtonAll>
      </div> */}
    </div>
  );
};

export default Portfolio;
