import Carousel from "nuka-carousel";
import style from "./Carousele.module.scss";

type Props = {};

const Carousele = (props: Props) => {
  return (
    <div className={style.carousele}>
      <Carousel wrapAround={true} slidesToShow={2}>
        <img src="/images/steak/steak-6.webp" />
        <img src="/images/steak/steak-7.webp" />
        <img src="/images/steak/steak-8.webp" />
        <img src="/images/steak/steak-3.webp" />
        <img src="/images/steak/steak-2.webp" />
      </Carousel>
    </div>
  );
};
export default Carousele;
