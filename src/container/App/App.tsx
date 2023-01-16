import { Grid } from "@mui/material";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.scss";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Grid container flexDirection={"column"} justifyContent={"center"}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Main />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
