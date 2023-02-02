import moment from "moment";
import React, { useState } from "react";
import style from "./Coment.module.scss";

type Props = {};

type Coment = {
  name: string;
  text: string;
};

const Coment = (props: Props) => {
  const arrComents: Coment[] = [];
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
        <div className={style.coment}>
          <div className={style.name}>
            <input
              type="text"
              placeholder="Enter your name ..."
              value={newComent.name}
              onChange={handleName}
            />
          </div>
          <div className={style.text}>
            <textarea
              value={newComent.text}
              onChange={handleText}
              placeholder="Enter your comment ..."></textarea>
          </div>
        </div>
        <div className={style.btnSend}>
          <button type="submit">
            <svg width="32" height="32" viewBox="0 0 22 22" fill="none">
              <path
                d="M13.0137 10.7353L5.64685 10.7598L3.99419 3.81634C3.77771 2.90644 4.7472 2.16525 5.56581 2.61556L18.6662 9.8104C19.4102 10.2205 19.4028 11.295 18.6502 11.702L5.50222 18.8283C4.67928 19.2741 3.72369 18.5382 3.94828 17.6299L5.64685 10.7598"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
      </form>
      <div className={style.view}>
        {coment.map(({ name, text }: Coment, i) => (
          <div key={i}>
            <div className={style.newName}>
              <div className={style.userWraper}>
                <div className={style.userAva}>
                  <span>{name[0]}</span>
                </div>
                <div className={style.userName}>
                  <h4>{name}</h4>
                </div>
              </div>
              <div className={style.dateComment}>
                <span>{moment().format("MMMM Do YYYY")}</span>
              </div>
            </div>

            <div className={style.newText}>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coment;
