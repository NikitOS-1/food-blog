import { useState } from "react";
import { Link } from "react-router-dom";
import ArticalItem from "../../componets/ArticalItem/ArticalItem";
import { ArticalsProps } from "../../state/articalsArray";
import style from "./Favorites.module.scss";

type Props = {
  favorite: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  }[];
  likeArtical?: number;
};
const Favorites = ({ favorite }: Props) => {
  // const itIsLike = articalsState.filter((articals) =>
  //   articals.id === likeArtical ? true : false
  // );
  // const [favorite, setFavorite] = useState<any>(itIsLike);

  // const addToFavoriteArt = () => {
  //   setFavorite((prevState: any) => [...prevState, itIsLike]);
  // };

  return (
    <>
      <div className={style.btnBack}>
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
      </div>
    </>
  );
};

export default Favorites;
