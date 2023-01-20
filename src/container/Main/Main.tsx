import { BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";

type Props = {};
const Main = (props: Props) => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};
export default Main;
