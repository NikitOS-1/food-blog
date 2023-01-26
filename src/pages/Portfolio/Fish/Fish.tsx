import { ArticalsProps } from "../../../state/articalsArray";
import FishItem from "./FishItem/FishItem";

type Props = {
  articalsState: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  }[];
};

const Fish = ({ articalsState }: Props) => {
  const fishCategory = articalsState.filter((category) =>
    category.category === "fish" ? true : false
  );

  return (
    <>
      {fishCategory.map(
        ({ id, category, image, title, description }: ArticalsProps, i) => (
          <FishItem
            key={i}
            id={id}
            category={category}
            image={image}
            title={title}
            description={description}
          />
        )
      )}
    </>
  );
};
export default Fish;
