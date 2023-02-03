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
import { useState } from "react";
import ArticalExtendedItem from "../../componets/ArticalItem/Extended/ArticalExtendedItem";

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
  // -------------GET 'ID' FOR PAGES ARTICAL EXTENDED-----------------
  const [currentId, setCurrentId] = useState<number>(0);
  const getId = (id: number) => {
    setCurrentId(id);
  };

  // -------------LIKES SYSTEM FOR COMPONENTS AND PAGE FAVORITES-----------------
  const [likeArtical, setLikeArtical] = useState<number>();
  const updateLikeArtical = (id: number) => {
    setLikeArtical(id);
  };
  const itIsLike = articalsState.filter((articals) =>
    articals.id === likeArtical ? true : false
  );

  const [favorite, setFavorite] = useState<any>(itIsLike);
  const addToFavoriteArt = () => {
    setFavorite((prevState: any) => [...prevState, itIsLike]);
  };
  console.log(Object.keys(favorite).map((i) => [i]));
  return (
    <main className={style.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/articles"
          element={
            <Articles
              articalsState={articalsState}
              getId={getId}
              updateLikeArtical={updateLikeArtical}
              addToFavoriteArt={addToFavoriteArt}
            />
          }
        />
        <Route
          path={`/articles/${currentId}`}
          element={
            <ArticalExtendedItem
              articalsState={articalsState}
              currentId={currentId}
            />
          }
        />
        <Route
          path="/articles/meat"
          element={<Meat articalsState={articalsState} getId={getId} />}
        />
        <Route
          path="/articles/fish"
          element={<Fish articalsState={articalsState} getId={getId} />}
        />
        <Route
          path="/articles/desserts"
          element={<Desserts articalsState={articalsState} getId={getId} />}
        />
        <Route
          path="/favorites"
          element={<Favorites likeArtical={likeArtical} favorite={favorite} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};
export default Main;
