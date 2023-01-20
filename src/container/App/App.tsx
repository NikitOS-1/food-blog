import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.scss";
import { CssBaseline } from "@mui/material";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <div className="app">
        <CssBaseline />
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
