import ButtonAll from "../../componets/ButtonAll/ButtonAll";
import style from "./Categories.module.scss";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div className={style.portfolio}>
      <div className={style.meat}>
        <div className={style.wrap}>
          <h1>Meat</h1>
          <ButtonAll to="/articles/meat">See more</ButtonAll>
        </div>
      </div>
      <div className={style.fish}>
        <div className={style.wrap}>
          <h1>Fish</h1>
          <ButtonAll to="/articles/fish">See more</ButtonAll>
        </div>
      </div>
      <div className={style.desserts}>
        <div className={style.wrap}>
          <h1>Desserts</h1>
          <ButtonAll to="/articles/desserts">See more</ButtonAll>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
