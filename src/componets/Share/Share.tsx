import style from "./Share.module.scss";

type Props = {
  handleShare: (bool: boolean) => void;
  id: number;
  image: string;
  title: string;
};
const Share = ({ handleShare, id, image, title }: Props) => {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.close} onClick={() => handleShare(false)}>
          X
        </div>
        <div className={style.info}>
          <div className={style.img}>
            <img src={image} alt="Art" />
          </div>
          <div className={style.title}>{title}</div>
        </div>
        <div className={style.thisLink}>
          <input
            type="text"
            value={`http://localhost:3000/articles/${id}`}
            disabled
          />
        </div>
      </div>
    </>
  );
};
export default Share;
