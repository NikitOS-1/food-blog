import { ArticalsProps } from "../../state/articalsArray";
import ArticalItem from "./ArticalItem/ArticalItem";

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
    <>
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
    </>
  );
};
export default Articals;
