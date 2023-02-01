import { useState } from "react";
import style from "./Coment.module.scss";

type Props = {};

type Coment = {
  name: string;
  text: string;
};

const Coment = (props: Props) => {
  let arrComents: Coment[] = [
    {
      name: "nik",
      text: "hello",
    },
    {
      name: "sasha",
      text: "hello",
    },
    {
      name: "sasha",
      text: "hello",
    },
  ];
  const [coment, setComent] = useState<Coment[]>(arrComents);
  const [newComent, setNewComent] = useState<Coment>({
    name: "",
    text: "",
  });

  return (
    <div className={style.wrap}>
      <form>
        <div>
          <input type="text" />
        </div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
      <div className={style.view}>
        {coment.map(({ name, text }: Coment) => (
          <div>
            <div>{name}</div>
            <div>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coment;
