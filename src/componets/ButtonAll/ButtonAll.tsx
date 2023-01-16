import "./ButtonAll.scss";

type Props = {
  text: string;
};
const ButtonAll = ({ text }: Props) => {
  return (
    <div className="btn">
      <a href="#" className="btn-text">
        {text}
      </a>
    </div>
  );
};

export default ButtonAll;
