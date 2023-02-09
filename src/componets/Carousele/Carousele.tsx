import Carousel from "nuka-carousel";
import style from "./Carousele.module.scss";

type Props = {};

const Carousele = (props: Props) => {
  return (
    <Carousel
      wrapAround={false}
      slidesToShow={1}
      className={style.carousel}
      autoplay={true}>
      <img src="/images/home/foto1.jpeg" className={style.img} />
      <img src="/images/home/foto2.webp" className={style.img} />
      <img src="/images/home/foto3.webp" className={style.img} />
      <img src="/images/steak/steak-4.webp" className={style.img} />
      <img src="/images/steak/steak-5.webp" className={style.img} />
      <img src="/images/steak/steak-6.webp" className={style.img} />
    </Carousel>
  );
};
export default Carousele;
