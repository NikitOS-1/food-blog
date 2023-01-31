import { Link } from "react-router-dom";
import style from "./ArticalExtendedItem.module.scss";

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
            <div key={i} className={style.wrap}>
              <img src={image} alt="art" />
              <div>{title}</div>
              <div>{description}</div>
            </div>
          )
        )}
      </div>
    </>
  );
};
export default ArticalExtendedItem;
