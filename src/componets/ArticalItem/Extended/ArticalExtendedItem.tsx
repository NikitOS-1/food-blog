import { useState } from "react";
import { Link } from "react-router-dom";
import Coment from "../Coment/Coment";
import style from "./ArticalExtendedItem.module.scss";

type Props = {
  articalsState: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  }[];
  currentId: number;
};

type Artical = {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
};

const ArticalExtendedItem = ({ articalsState, currentId }: Props) => {
  const articalForId = articalsState.filter((id) =>
    id.id === currentId ? true : false
  );
  const [countLike, setCountLike] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);

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
  const handleLike = (bool: boolean) => {
    if (bool) {
      setIsLike(false);
      setCountLike((prevState: number) => prevState - 1);
    } else {
      setIsLike(true);
      setCountLike((prevState: number) => prevState + 1);
    }
  };
  return (
    <>
      <div className={style.btnBack}>
        <Link to="/articles">{"< Back"}</Link>
      </div>
      <div>
        {articalForId.map(
          ({ id, category, image, title, description }: Artical, i) => (
            <div key={i} className={style.wrap}>
              <div className={style.category}>{category}</div>
              <div className={style.titleFirst}>{title}</div>
              <div className={style.duration}>
                <div className={style.time}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    id="svg_time">
                    <path
                      d="M17.7082 10.0004C17.7082 14.2579 14.2573 17.7088 9.99984 17.7088C5.74234 17.7088 2.2915 14.2579 2.2915 10.0004C2.2915 5.74295 5.74234 2.29211 9.99984 2.29211C14.2573 2.29211 17.7082 5.74295 17.7082 10.0004Z"
                      stroke="#333333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"></path>
                    <path
                      d="M12.8594 12.4524L9.71777 10.5782V6.53906"
                      stroke="#333333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"></path>
                  </svg>
                  20 мин.
                </div>
                <div className={style.portions}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    id="svg_portion">
                    <path
                      d="M10.4573 4.4487L10.0557 5.36254L11.0452 5.49391C14.2238 5.91589 17.5468 9.21574 17.7427 13.9164H2.10437C2.22703 9.24608 5.74701 5.91977 8.95485 5.49391L9.94424 5.36256L9.54282 4.44878C9.51459 4.38452 9.50002 4.31806 9.50002 4.25C9.50002 3.97492 9.72494 3.75 10 3.75C10.2751 3.75 10.5 3.97492 10.5 4.25C10.5 4.31813 10.4855 4.38452 10.4573 4.4487ZM2.13103 14.2293C2.13117 14.2296 2.13104 14.2293 2.13069 14.2284L2.13103 14.2293Z"
                      stroke="#333333"
                      strokeWidth="1.5"></path>
                  </svg>
                  2 порции
                </div>
              </div>
              <div className={style.image}>
                <img src={image} alt="art" />
              </div>
              <div className={style.itemOption}>
                <div className={style.like} onClick={() => handleLike(isLike)}>
                  {isLike ? likeIcon : unLikeIcon}
                  <span className={style.countLike}>{countLike}</span>
                </div>
                <div className={style.share}>
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
              </div>
              <div className={style.title}>{title}</div>
              <div className={style.description}>{description}</div>
              <div className={style.recipe}>
                <div className={style.ingredients}>Ingredients:</div>
                <div className={style.ingItem}>乾糖糖酪 - 350克</div>
                <div className={style.ingItem}>雞蛋 - 1片</div>
                <div className={style.ingItem}>糖 - 1湯匙</div>
                <div className={style.ingItem}>麵粉雞 - 1耳語</div>
              </div>
            </div>
          )
        )}
      </div>
      <Coment />
    </>
  );
};
export default ArticalExtendedItem;
