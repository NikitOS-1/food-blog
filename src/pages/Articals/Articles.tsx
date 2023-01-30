import ArticalItem from "../../componets/ArticalItem/ArticalItem";
import { ArticalsProps } from "../../state/articalsArray";
import style from "./Articles.module.scss";

type Props = {
  articalsState: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  }[];
};

const Articals = ({ articalsState }: Props) => {
  return (
    <div className={style.items}>
      {articalsState.map(
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
export default Articals;
