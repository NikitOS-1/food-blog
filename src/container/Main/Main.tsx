import { Route, Routes } from "react-router-dom";
import About from "../../pages/About/About";
import Articles from "../../pages/Articals/Articles";
import Favorites from "../../pages/Favorites/Favorites";
import Home from "../../pages/Home/Home";
import Portfolio from "../../pages/Portfolio/Portfolio";
import style from "./Main.module.scss";

type Props = {};
const Main = (props: Props) => {
  return (
    <main className={style.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};
export default Main;
