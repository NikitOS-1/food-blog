import { useState } from "react";
import { Link } from "react-router-dom";
import ArticalItem from "../../componets/ArticalItem/ArticalItem";
import { ArticalsProps } from "../../state/articalsArray";
import style from "./Favorites.module.scss";

type Props = {
  articalsState: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  }[];
  currentId: number;
};
type Art = {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
};

const Favorites = ({ currentId, articalsState }: Props) => {
  console.log("currentId: " + currentId);
  let foo = Object.values(articalsState).filter((i) =>
    i.id === currentId ? true : false
  );

  let hhh = foo.reduce((object, current )=>())
  const [art, setArt] = useState<Art>();

  console.log(foo);
  console.log(art);
  return (
    <>
      {/* {articleInFavorite} */}
      {/* <div className={style.btnBack}>
        <Link to="/articles">{"< Back"}</Link>
      </div>
      <div className={style.items}>
        {likeArticals.map(
          ({ id, category, image, title, description }: ArticalsProps, i) => (
            <div key={i}>
              id={id}
              category={category}
              image={image}
              title={title}
              description={description}
            </div>
          )
        )}
      </div> */}
    </>
  );
};

export default Favorites;
