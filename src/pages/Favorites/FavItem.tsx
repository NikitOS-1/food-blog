import { ArticalsProps } from "../../state/articalsArray";
type Props = {
  art: ArticalsProps;
};
const FavItem = ({ art }: Props) => {
  return (
    <>
      <div>{art.id}</div>
      <div>{art.category}</div>
      <div>{art.description}</div>
      <div>{art.image}</div>
      <div>{art.title}</div>
    </>
  );
};
export default FavItem;
