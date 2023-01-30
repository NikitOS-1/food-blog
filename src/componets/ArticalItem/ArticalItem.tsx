import style from "./ArticalItem.module.scss";

type Props = {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
};

const ArticalItem = ({ id, category, image, title, description }: Props) => {
  return (
    <div className={style.wrap}>
      <div className={style.item}>
        <div className={style.image}>
          <img src={image} alt="art" />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
        <div className={style.itemOption}>
          <div className={style.like}>
            <svg
              className={style.normalLike}
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none">
              <path
                d="M9.78095 17.1159C7.79122 15.8914 5.9402 14.4502 4.26104 12.8181C3.0805 11.6427 2.18178 10.2098 1.63369 8.62909C0.647402 5.56276 1.79946 2.05241 5.02355 1.01354C6.718 0.468048 8.5686 1.5118 9.99644 2.58331C11.4248 1.5131 13.2748 0.469463 14.9693 1.01354C18.1934 2.05241 19.3538 5.56276 18.3675 8.62909C17.8194 10.2098 16.9207 11.6427 15.7401 12.8181C14.061 14.4502 12.2099 15.8914 10.2202 17.1159L10.0047 17.25L9.78095 17.1159Z"
                stroke="#999999"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>
            <svg
              className={style.hoverLike}
              width="18"
              height="18"
              viewBox="0 0 18 18">
              <path
                d="M8.78095 17.1159C6.79122 15.8914 4.9402 14.4502 3.26104 12.8181C2.0805 11.6427 1.18178 10.2098 0.633692 8.62909C-0.352598 5.56276 0.799455 2.05241 4.02355 1.01354C5.718 0.468048 7.5686 1.5118 8.99644 2.58331C10.4248 1.5131 12.2748 0.469463 13.9693 1.01354C17.1934 2.05241 18.3538 5.56276 17.3675 8.62909C16.8194 10.2098 15.9207 11.6427 14.7401 12.8181C13.061 14.4502 11.2099 15.8914 9.22022 17.1159L9.00473 17.25L8.78095 17.1159Z"
                fill="#333333"></path>
            </svg>
            <span className={style.countLike}>{0}</span>
          </div>
          <div className={style.comment}>
            <svg
              className={style.commentNormal}
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none">
              <path
                d="M7.05398 11.2749C6.46295 11.2749 5.98279 10.7948 5.98279 10.2037C5.98279 9.61444 6.46295 9.13428 7.05398 9.13428C7.64501 9.13428 8.12517 9.61444 8.12517 10.2037C8.12517 10.7948 7.64501 11.2749 7.05398 11.2749ZM11.2183 11.2749C10.6272 11.2749 10.1471 10.7948 10.1471 10.2037C10.1471 9.61444 10.6272 9.13428 11.2183 9.13428C11.8093 9.13428 12.2894 9.61444 12.2894 10.2037C12.2894 10.7948 11.8093 11.2749 11.2183 11.2749ZM14.3114 10.2037C14.3114 10.7948 14.7916 11.2749 15.3826 11.2749C15.9737 11.2749 16.4538 10.7948 16.4538 10.2037C16.4538 9.61444 15.9737 9.13428 15.3826 9.13428C14.7916 9.13428 14.3114 9.61444 14.3114 10.2037Z"
                fill="#999999"></path>
              <path
                d="M11.0183 0.833271C5.94686 0.823127 1.71568 4.9436 1.83333 10.0137C1.87656 11.8768 2.42 13.1327 3.20833 14.5833C3.20833 14.5833 2.09407 17.736 1.60416 18.3941C1.46666 18.8898 1.88833 19.2561 2.35583 19.1092C2.89122 18.9502 6.41667 17.7916 6.41667 17.7916C7.755 18.5802 9.13172 19.1262 11 19.1666C16.0652 19.2761 20.1743 15.0526 20.1667 9.98617C20.1591 4.93243 16.0721 0.843378 11.0183 0.833271Z"
                stroke="#999999"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>
            <svg
              className={style.commentHover}
              width="20"
              height="20"
              viewBox="0 0 20 20">
              <path
                d="M10.0183 0.833271C4.94686 0.823127 0.715685 4.9436 0.833329 10.0137C0.876559 11.8768 1.42 13.1327 2.20833 14.5833C2.20833 14.5833 1.09407 17.736 0.604163 18.3941C0.466663 18.8898 0.88833 19.2561 1.35583 19.1092C1.89122 18.9502 5.41667 17.7916 5.41667 17.7916C6.755 18.5802 8.13172 19.1262 10 19.1666C15.0652 19.2761 19.1743 15.0526 19.1667 9.98617C19.1591 4.93243 15.0721 0.843378 10.0183 0.833271Z"
                fill="#333333"></path>
              <path
                d="M6.05398 11.2749C5.46295 11.2749 4.98279 10.7948 4.98279 10.2037C4.98279 9.61444 5.46295 9.13428 6.05398 9.13428C6.64501 9.13428 7.12517 9.61444 7.12517 10.2037C7.12517 10.7948 6.64501 11.2749 6.05398 11.2749ZM10.2183 11.2749C9.62722 11.2749 9.14706 10.7948 9.14706 10.2037C9.14706 9.61444 9.62722 9.13428 10.2183 9.13428C10.8093 9.13428 11.2894 9.61444 11.2894 10.2037C11.2894 10.7948 10.8093 11.2749 10.2183 11.2749ZM13.3114 10.2037C13.3114 10.7948 13.7916 11.2749 14.3826 11.2749C14.9737 11.2749 15.4538 10.7948 15.4538 10.2037C15.4538 9.61444 14.9737 9.13428 14.3826 9.13428C13.7916 9.13428 13.3114 9.61444 13.3114 10.2037Z"
                fill="white"></path>
            </svg>
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
                stroke-width="1.5"></path>
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
      </div>
    </div>
  );
};
export default ArticalItem;
