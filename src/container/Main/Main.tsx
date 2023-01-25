import { Route, Routes } from "react-router-dom";
import About from "../../pages/About/About";
import Articles from "../../pages/Articals/Articles";
import Desserts from "../../pages/Portfolio/Desserts/Desserts";
import Favorites from "../../pages/Favorites/Favorites";
import Fish from "../../pages/Portfolio/Fish/Fish";
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
        <Route path="/articles/fish" element={<Fish />} />
        <Route path="/articles/desserts" element={<Desserts />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};
export default Main;
