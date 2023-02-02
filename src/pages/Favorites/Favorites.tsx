type Props = {
  articalsState: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  }[];
};
const Favorites = ({ articalsState }: Props) => {
  const itIsLike = articalsState.filter((category) =>
    category.category === "desserts" ? true : false
  );
  return <div>Favorites</div>;
};
export default Favorites;
