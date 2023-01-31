import { Link } from "react-router-dom";

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

type Artical = {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
};

const ArticalExtendedItem = ({ articalsState, currentId }: Props) => {
  const articalForId = articalsState.filter((id) =>
    id.id === currentId ? true : false
  );

  return (
    <>
      <div>
        <Link to="/articles">{"< Back"}</Link>
      </div>
      <div>
        {articalForId.map(
          ({ id, category, image, title, description }: Artical, i) => (
            <div key={i}>
              {i}
              {id}
              {category}
              <img src={image} alt="art" />
              {title}
              {description}
            </div>
          )
        )}
      </div>
    </>
  );
};
export default ArticalExtendedItem;
