import { Link } from "react-router-dom";
import ArticalItem from "../../../componets/ArticalItem/ArticalItem";
import { ArticalsProps } from "../../../state/articalsArray";
import style from "./Meat.module.scss";

type Props = {
  articalsState: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  }[];
  getId: (id: number) => void;
  addToFavArt: (id: number) => void;
};

const Meat = ({ articalsState, getId, addToFavArt }: Props) => {
  const meatCategory = articalsState.filter((category) =>
    category.category === "meat" ? true : false
  );

  return (
    <>
      <div className={style.btnBack}>
        <Link to="/categories">{"< Back to categories"}</Link>
      </div>
      <div className={style.items}>
        {meatCategory.map(
          ({ id, category, image, title, description }: ArticalsProps, i) => (
            <ArticalItem
              key={i}
              id={id}
              category={category}
              image={image}
              title={title}
              description={description}
              getId={getId}
              addToFavArt={addToFavArt}
            />
          )
        )}
      </div>
    </>
  );
};
export default Meat;
