import { Route, Routes } from "react-router-dom";
import About from "../../pages/About/About";
import Articles from "../../pages/Articals/Articles";
import Favorites from "../../pages/Favorites/Favorites";
import Home from "../../pages/Home/Home";
import Meat from "../../pages/Portfolio/Meat/Meat";
import Portfolio from "../../pages/Portfolio/Portfolio";
import style from "./Main.module.scss";

type Props = {
  articalsState: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  }[];
};

const Main = ({ articalsState }: Props) => {
  return (
    <main className={style.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/articles"
          element={<Articles articalsState={articalsState} />}
        />
        <Route
          path="/articles/meat"
          element={<Meat articalsState={articalsState} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};
export default Main;
