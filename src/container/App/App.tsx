import { Grid } from "@mui/material";
import Header from "../Header/Header";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Grid container flexDirection={"column"}>
        <Grid item xs={4} sm={6} md={8} lg={10} xl={12}>
          <Header />
        </Grid>
        <Grid item xs={4} sm={6} md={8} lg={10} xl={12}>
          <p>Main</p>
        </Grid>
        <Grid item xs={4} sm={6} md={8} lg={10} xl={12}>
          <p>Footer</p>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
