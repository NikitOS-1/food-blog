import { Grid } from "@mui/material";
import Header from "../Header/Header";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Grid container flexDirection={"column"} justifyContent={"center"}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <p>Main</p>
        </Grid>
        <Grid item>
          <p>Footer</p>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
