import style from "./Main.module.scss";
import homePicture from "../../assets/home.webp";

type Props = {};
const Main = (props: Props) => {
  return (
    <div>
      Main
      <img src={homePicture} alt="#" />
    </div>
  );
};
export default Main;
