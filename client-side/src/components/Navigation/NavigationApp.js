import NavigationRouteComp from "./NavigationRoute";
import NavigationBarComp from "./NavigationComp";
import { BrowserRouter as Router } from "react-router-dom";

//show the navbar and navigate smart
function SinglePageAppComp({ set, user }) {
  return (
    <Router>
      <NavigationBarComp user={user}></NavigationBarComp>
      <NavigationRouteComp set={set} user={user}></NavigationRouteComp>
    </Router>
  );
}
export default SinglePageAppComp;
