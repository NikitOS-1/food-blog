type Props = {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
};

const Artical = ({ id, category, image, title, description }: Props) => {
  return (
    <>
      <div>id: {id}</div>
      <div>category: {category}</div>
      <div>image: {image}</div>
      <img src={image} alt="art" />
      <div>title: {title}</div>
      <div>description: {description}</div>
    </>
  );
};
export default Artical;
