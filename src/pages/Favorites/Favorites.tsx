import { useState } from "react";
import { Link } from "react-router-dom";
import ArticalItem from "../../componets/ArticalItem/ArticalItem";
import style from "./Favorites.module.scss";
import { getArticalsObject, ArticalsProps } from "../../state/articalsArray";
import articalsArray from "../../state/articalsArray";
import FavItem from "./FavItem/FavItem";

type Props = {
  likeArts: {
    [id: number]: number;
  };
  artsObject?: {
    [id: number]: ArticalsProps;
  };
  getId: (id: number) => void;
};

const Favorites = ({
  likeArts,
  artsObject = getArticalsObject(articalsArray),
  getId,
}: Props) => {
  return (
    <div className={style.items}>
      {Object.keys(likeArts).map((artId) => (
        <FavItem key={artId} art={artsObject[+artId]} getId={getId} />
      ))}
    </div>
  );
};

export default Favorites;
