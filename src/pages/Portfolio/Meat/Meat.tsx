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
};

const Meat = ({ articalsState }: Props) => {
  const meatCategory = articalsState.filter((category) =>
    category.category === "meat" ? true : false
  );

  return (
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
          />
        )
      )}
    </div>
  );
};
export default Meat;
