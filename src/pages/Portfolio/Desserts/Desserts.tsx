import { ArticalsProps } from "../../../state/articalsArray";
import DessertsItem from "./DessertsItem/DessertsItem";
import style from "./Desserts.module.scss";

type Props = {
  articalsState: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  }[];
};

const Desserts = ({ articalsState }: Props) => {
  const dessertsCategory = articalsState.filter((category) =>
    category.category === "desserts" ? true : false
  );

  return (
    <div className={style.items}>
      {dessertsCategory.map(
        ({ id, category, image, title, description }: ArticalsProps, i) => (
          <DessertsItem
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
export default Desserts;
