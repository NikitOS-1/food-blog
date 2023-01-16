import { Grid } from "@mui/material";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Grid container flexDirection={"column"} justifyContent={"center"}>
        <Grid item>
          <Header />
        </Grid>
        <Grid>
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
