import style from "./Main.module.scss";

type Props = {};
const Main = (props: Props) => {
  return (
    <div className={style.main}>
      <div className={style.title}>ЕДА КАК ИСКУССТВО</div>
      <div className={style.about}>ФОТОГРАФИЯ</div>
      <button className={style.btn}>Смотреть работы</button>
    </div>
  );
};
export default Main;
