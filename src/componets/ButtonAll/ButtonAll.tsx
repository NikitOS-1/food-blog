import "./ButtonAll.scss";

type Props = {
  text: string;
};
const ButtonAll = ({ text }: Props) => {
  return (
    <div className="btn">
      <span className="btn-text">{text}</span>
    </div>
  );
};

export default ButtonAll;
