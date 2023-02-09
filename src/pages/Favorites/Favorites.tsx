import style from "./Favorites.module.scss";
import { getArticalsObject, ArticalsProps } from "../../state/articalsArray";
import articalsArray from "../../state/articalsArray";
import FavItem from "./FavItem/FavItem";

type Props = {
  favArts: {
    [id: number]: number;
  };
  artsObject?: {
    [id: number]: ArticalsProps;
  };
  getId: (id: number) => void;
};

const Favorites = ({
  favArts,
  artsObject = getArticalsObject(articalsArray),
  getId,
}: Props) => {
  return (
    <div className={style.items}>
      {Object.keys(favArts).map((artId) => (
        <FavItem key={artId} art={artsObject[+artId]} getId={getId} />
      ))}
    </div>
  );
};

export default Favorites;
