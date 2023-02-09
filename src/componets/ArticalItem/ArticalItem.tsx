import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./ArticalItem.module.scss";
import Share from "../Share/Share";

type Props = {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
  getId: (id: number) => void;
  addToFavArt: (id: number) => void;
};

const ArticalItem = ({
  id,
  category,
  image,
  title,
  description,
  getId,
  addToFavArt,
}: Props) => {
  const [countLike, setCountLike] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isFav, setIsFav] = useState<boolean>(false);
  const [shareShow, setShareShow] = useState<boolean>(false);

  const likeIcon = (
    <svg className={style.likeIcon} width="18" height="18" viewBox="0 0 18 18">
      <path
        d="M8.78095 17.1159C6.79122 15.8914 4.9402 14.4502 3.26104 12.8181C2.0805 11.6427 1.18178 10.2098 0.633692 8.62909C-0.352598 5.56276 0.799455 2.05241 4.02355 1.01354C5.718 0.468048 7.5686 1.5118 8.99644 2.58331C10.4248 1.5131 12.2748 0.469463 13.9693 1.01354C17.1934 2.05241 18.3538 5.56276 17.3675 8.62909C16.8194 10.2098 15.9207 11.6427 14.7401 12.8181C13.061 14.4502 11.2099 15.8914 9.22022 17.1159L9.00473 17.25L8.78095 17.1159Z"
        fill="#333333"></path>
    </svg>
  );
  const unLikeIcon = (
    <svg
      className={style.unLikeIcon}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none">
      <path
        d="M9.78095 17.1159C7.79122 15.8914 5.9402 14.4502 4.26104 12.8181C3.0805 11.6427 2.18178 10.2098 1.63369 8.62909C0.647402 5.56276 1.79946 2.05241 5.02355 1.01354C6.718 0.468048 8.5686 1.5118 9.99644 2.58331C11.4248 1.5131 13.2748 0.469463 14.9693 1.01354C18.1934 2.05241 19.3538 5.56276 18.3675 8.62909C17.8194 10.2098 16.9207 11.6427 15.7401 12.8181C14.061 14.4502 12.2099 15.8914 10.2202 17.1159L10.0047 17.25L9.78095 17.1159Z"
        stroke="#999999"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"></path>
    </svg>
  );
  const FavNormalIcon = (
    <svg
      className={style.saveNormal}
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none">
      <path
        d="M7.65682 15.5085L2.29829 18.4324C1.87045 18.6539 1.34336 18.4971 1.1075 18.0783V18.0783C1.03926 17.9485 1.00245 17.8046 1 17.6582V4.70233C1 2.23141 2.69522 1.24304 5.13467 1.24304H10.8653C13.2304 1.24304 15 2.16552 15 4.5376V17.6582C15 17.8919 14.9068 18.1161 14.7408 18.2814C14.5749 18.4466 14.3498 18.5395 14.1152 18.5395C13.9655 18.5371 13.8184 18.5005 13.6852 18.4324L8.29356 15.5085C8.09488 15.4016 7.8555 15.4016 7.65682 15.5085Z"
        stroke="#999999"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"></path>
    </svg>
  );
  const FavHoverIcon = (
    <svg className={style.saveHover} width="14" height="18" viewBox="0 0 14 18">
      <path
        d="M6.65682 14.5085L1.29829 17.4324C0.87045 17.6539 0.343365 17.4971 0.107501 17.0783C0.0392632 16.9485 0.00244833 16.8046 0 16.6582V3.70233C0 1.23141 1.69522 0.243042 4.13467 0.243042H9.86533C12.2304 0.243042 14 1.16552 14 3.5376V16.6582C14 16.8919 13.9068 17.1161 13.7408 17.2814C13.5749 17.4466 13.3498 17.5395 13.1152 17.5395C12.9655 17.5371 12.8184 17.5005 12.6852 17.4324L7.29356 14.5085C7.09488 14.4016 6.8555 14.4016 6.65682 14.5085Z"
        fill="#333333"></path>
    </svg>
  );

  const handleLike = (bool: boolean) => {
    if (bool) {
      setIsLike(false);
      setCountLike((prevState: number) => prevState - 1);
    } else {
      setIsLike(true);
      setCountLike((prevState: number) => prevState + 1);
    }
  };
  const handleSave = (bool: boolean) => {
    if (bool) {
      setIsFav(false);
    } else {
      setIsFav(true);
      addToFavArt(id);
    }
  };
  const handleShare = (bool: boolean) => {
    setShareShow(bool);
  };

  return (
    <div className={style.wrap}>
      <div className={style.item}>
        <Link to={`/articles/${id}`} onClick={() => getId(id)}>
          <div className={style.image}>
            <img src={image} alt="art" />
          </div>
          <div className={style.title}>{title}</div>
          <div className={style.description}>{description}</div>
        </Link>
        <div className={style.itemOption}>
          <div className={style.like} onClick={() => handleLike(isLike)}>
            {isLike ? likeIcon : unLikeIcon}
            <span className={style.countLike}>{countLike}</span>
          </div>
          <div className={style.save} onClick={() => handleSave(isFav)}>
            {isFav ? FavHoverIcon : FavNormalIcon}
          </div>
          <div className={style.share} onClick={() => handleShare(true)}>
            <svg
              className={style.shareNormal}
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none">
              <path
                d="M18.9428 7.20969L12.0719 1.31683C11.8535 1.13022 11.526 1.07325 11.2397 1.17475C10.9542 1.27559 10.7687 1.51524 10.7687 1.77977V4.40144C6.37583 4.55595 2.54337 7.09971 1.31575 10.7448C0.784399 12.3254 0.825627 13.6093 0.840874 14.0932L0.843931 14.2202C0.843931 14.5149 1.07371 14.7735 1.40429 14.8514C1.47224 14.8672 1.54016 14.875 1.60737 14.875C1.87152 14.875 2.12344 14.7565 2.26316 14.5555C5.28714 10.1961 9.29369 10.0723 10.7687 10.1954V13.5655C10.7687 13.83 10.9542 14.0697 11.2397 14.1705C11.526 14.2727 11.8535 14.2157 12.0719 14.0284L18.9428 8.13559C19.2413 7.87951 19.2413 7.46568 18.9428 7.20969Z"
                stroke="#999999"
                strokeWidth="1.5"></path>
            </svg>
            <svg
              className={style.shareHover}
              width="20"
              height="14"
              viewBox="0 0 20 14">
              <path
                d="M18.9429 6.20969L12.0719 0.316832C11.8535 0.130218 11.526 0.0732461 11.2397 0.174753C10.9542 0.275589 10.7687 0.515242 10.7687 0.779769V3.40144C6.37583 3.55595 2.54337 6.09971 1.31575 9.74476C0.784399 11.3254 0.825627 12.6093 0.840874 13.0932L0.843931 13.2202C0.843931 13.5149 1.07371 13.7735 1.40429 13.8514C1.47224 13.8672 1.54016 13.875 1.60737 13.875C1.87152 13.875 2.12344 13.7565 2.26316 13.5555C5.28714 9.19608 9.29369 9.07232 10.7687 9.19544V12.5655C10.7687 12.83 10.9542 13.0697 11.2397 13.1705C11.526 13.2727 11.8535 13.2157 12.0719 13.0284L18.9429 7.13559C19.2413 6.87951 19.2413 6.46568 18.9429 6.20969Z"
                fill="#333333"></path>
            </svg>
            <span className={style.shareTitle}>Share</span>
          </div>
          {shareShow && (
            <Share
              handleShare={handleShare}
              id={id}
              image={image}
              title={title}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default ArticalItem;
