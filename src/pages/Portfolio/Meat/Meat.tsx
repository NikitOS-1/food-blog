import { ArticalsProps } from "../../../state/articalsArray";
import MeatItem from "./MeatItem/MeatItem";

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
    <>
      {meatCategory.map(
        ({ id, category, image, title, description }: ArticalsProps, i) => (
          <MeatItem
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
export default Meat;
