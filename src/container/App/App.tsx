import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.scss";
import { CssBaseline } from "@mui/material";

import articalsArray from "../../state/articalsArray";

type FavoriteArticle = {
  [id: number]: number;
};

const App = () => {
  return (
    <>
      <div className="app">
        <CssBaseline />
        <Header />
        <Main articalsState={articalsArray} />
        <Footer />
      </div>
    </>
  );
};

export default App;
