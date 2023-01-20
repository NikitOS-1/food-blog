import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.scss";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
