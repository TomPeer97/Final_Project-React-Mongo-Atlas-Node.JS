import { Switch, Route } from "react-router-dom";
import { tabs } from "../../helpers/tabs";

//create the routing for the navigation
function NavigationRouteComp({ set, user }) {
  return (
    <Switch>
      {tabs.map((tab, index) => (
        <Route key={index} path={tab.href}>
          {tab.href === "/Login" ? (
            <tab.page set={set} user={user}></tab.page>
          ) : (
            <tab.page></tab.page>
          )}
        </Route>
      ))}
    </Switch>
  );
}

export default NavigationRouteComp;
