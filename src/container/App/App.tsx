import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.scss";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
