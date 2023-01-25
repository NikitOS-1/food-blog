import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.scss";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import articalsArray, { ArticalsProps } from "../../state/articalsArray";

const App = () => {
  const [articalsState, setArticalsState] =
    useState<ArticalsProps[]>(articalsArray);

  return (
    <>
      <div className="app">
        <CssBaseline />
        <Header />
        <Main articalsState={articalsState} />
        <Footer />
      </div>
    </>
  );
};

export default App;
