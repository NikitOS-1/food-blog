import style from "./Footer.module.scss";
import iconFacebook from "../../assets/icon-facebook.webp";
import iconTwiter from "../../assets/icon-twiter.webp";
import iconInstagram from "../../assets/icon-instagram.webp";

type Props = {};
const Footer = (props: Props) => {
  return (
    <footer className={style.footer}>
      <div className={style.links}>
        <a href="https://facebook.com">
          <img src={iconFacebook} alt="facebook" />
        </a>
        <a href="https://twitter.com/?lang=uk">
          <img src={iconTwiter} alt="twitter" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={iconInstagram} alt="instagram" />
        </a>
      </div>
      <div className={style.after}>© 2023 Food is art. Nikita Puzyrenko</div>
    </footer>
  );
};
export default Footer;
