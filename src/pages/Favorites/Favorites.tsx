import { useState } from "react";
import { Link } from "react-router-dom";
import ArticalItem from "../../componets/ArticalItem/ArticalItem";
import style from "./Favorites.module.scss";
import { getArticalsObject, ArticalsProps } from "../../state/articalsArray";
import articalsArray from "../../state/articalsArray";
import FavItem from "./FavItem";

type Props = {
  likeArts: {
    [id: number]: number;
  };
  artsObject?: {
    [id: number]: ArticalsProps;
  };
};

const Favorites = ({
  likeArts,
  artsObject = getArticalsObject(articalsArray),
}: Props) => {
  return (
    <>
      {Object.keys(likeArts).map((artId) => (
        <FavItem key={artId} art={artsObject[+artId]} />
      ))}
    </>
  );
};

export default Favorites;
