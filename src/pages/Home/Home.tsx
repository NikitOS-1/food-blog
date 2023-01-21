import style from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className={style.home}>
      <div className={style.title}>ЕДА КАК ИСКУССТВО</div>
      <div className={style.about}>ФОТОГРАФИЯ</div>
    </div>
  );
};

export default Home;
