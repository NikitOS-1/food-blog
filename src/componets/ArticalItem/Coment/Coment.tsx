import React, { useState } from "react";
import style from "./Coment.module.scss";

type Props = {};

type Coment = {
  name: string;
  text: string;
};

const Coment = (props: Props) => {
  const arrComents: Coment[] = [
    {
      name: "nik",
      text: "hello",
    },
  ];
  const [coment, setComent] = useState<Coment[]>(arrComents);
  const [newComent, setNewComent] = useState<Coment>({
    name: "",
    text: "",
  });
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComent((prevState: Coment) => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComent((prevState: Coment) => ({
      ...prevState,
      text: e.target.value,
    }));
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComent.name === "" || newComent.text === "") {
    } else {
      setComent((prevState: Coment[]) => [...prevState, newComent]);
      setNewComent({
        name: "",
        text: "",
      });
    }
  };
  return (
    <div className={style.wrap}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.name}>
          <input type="text" value={newComent.name} onChange={handleName} />
        </div>
        <div className={style.text}>
          <textarea value={newComent.text} onChange={handleText}></textarea>
        </div>
        <div className={style.btnSend}>
          <button type="submit">Send</button>
        </div>
      </form>
      <div className={style.view}>
        {coment.map(({ name, text }: Coment, i) => (
          <div key={i}>
            <div>{name}</div>
            <div>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coment;
