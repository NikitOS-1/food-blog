import { Route, Routes } from "react-router-dom";
import About from "../../pages/About/About";
import Articles from "../../pages/Articals/Articles";
import Desserts from "../../pages/Categories/Desserts/Desserts";
import Meat from "../../pages/Categories/Meat/Meat";
import Fish from "../../pages/Categories/Fish/Fish";
import Favorites from "../../pages/Favorites/Favorites";
import Home from "../../pages/Home/Home";
import Categories from "../../pages/Categories/Categories";
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

type LikesArt = {
  [id: number]: number;
};

const Main = ({ articalsState }: Props) => {
  // -------------GET 'ID' SELECT-----------------
  const [currentId, setCurrentId] = useState<number>(0);
  const getId = (id: number) => {
    setCurrentId(id);
  };

  // -------------LIKES SYSTEM FOR COMPONENTS AND PAGE FAVORITES-----------------
  const [likeArts, setLikeArts] = useState<LikesArt>({});

  const addLikesArtToFav = (id: number) => {
    setLikeArts((prevState: LikesArt) => ({
      ...prevState,
      [id]: prevState[id] || 0,
    }));
  };
  return (
    <main className={style.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/articles/meat"
          element={
            <Meat
              articalsState={articalsState}
              getId={getId}
              addLikesArtToFav={addLikesArtToFav}
            />
          }
        />
        <Route
          path="/articles/fish"
          element={
            <Fish
              articalsState={articalsState}
              getId={getId}
              addLikesArtToFav={addLikesArtToFav}
            />
          }
        />
        <Route
          path="/articles/desserts"
          element={
            <Desserts
              articalsState={articalsState}
              getId={getId}
              addLikesArtToFav={addLikesArtToFav}
            />
          }
        />
        <Route
          path="/articles"
          element={
            <Articles
              articalsState={articalsState}
              getId={getId}
              addLikesArtToFav={addLikesArtToFav}
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
          path="/favorites"
          element={<Favorites likeArts={likeArts} getId={getId} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};
export default Main;
