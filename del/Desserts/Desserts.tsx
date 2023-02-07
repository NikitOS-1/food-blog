import { ArticalsProps } from "../../src/state/articalsArray";
import style from "./Desserts.module.scss";
import ArticalItem from "../../src/componets/ArticalItem/ArticalItem";
import { Link } from "react-router-dom";

type Props = {
  articalsState: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  }[];
  getId: (id: number) => void;
};

const Desserts = ({ articalsState, getId }: Props) => {
  const dessertsCategory = articalsState.filter((category) =>
    category.category === "desserts" ? true : false
  );

  return (
    <>
      <div className={style.btnBack}>
        <Link to="/portfolio">{"< Back"}</Link>
      </div>
      <div className={style.items}>
        {dessertsCategory.map(
          ({ id, category, image, title, description }: ArticalsProps, i) => (
            <ArticalItem
              key={i}
              id={id}
              category={category}
              image={image}
              title={title}
              description={description}
              getId={getId}
            />
          )
        )}
      </div>
    </>
  );
};

export default Desserts;
