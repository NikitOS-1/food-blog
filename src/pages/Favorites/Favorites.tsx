import { useState } from "react";
import { Link } from "react-router-dom";
import ArticalItem from "../../componets/ArticalItem/ArticalItem";
import { ArticalsProps } from "../../state/articalsArray";
import style from "./Favorites.module.scss";

type Props = {};
const Favorites = ({}: Props) => {
  return (
    <>
      <div>Favorites</div>
      {/* <div className={style.btnBack}>
        <Link to="/articles">{"< Back"}</Link>
      </div>
      <div className={style.items}>
        {favorite.map(
          ({ id, category, image, title, description }: ArticalsProps) => (
            <ArticalItem
              id={id}
              category={category}
              image={image}
              title={title}
              description={description}
            />
          )
        )}
      </div> */}
    </>
  );
};

export default Favorites;
