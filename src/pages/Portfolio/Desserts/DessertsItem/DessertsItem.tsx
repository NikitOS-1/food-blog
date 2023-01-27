import style from "./DessertsItem.module.scss";

type Props = {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
};

const DessertsItem = ({ id, category, image, title, description }: Props) => {
  return (
    <div className={style.wrap}>
      <div className={style.item}>
        <div className={style.image}>
          <img src={image} alt="art" />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
        <div className={style.itemOption}></div>
      </div>
    </div>
  );
};
export default DessertsItem;
