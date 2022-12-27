import React from "react";
import ReactDOM from "react-dom/client";
import style from "./index.module.scss";

const App = () => {
  return (
    <>
      <div className={style.tomato}>Hello</div>
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
