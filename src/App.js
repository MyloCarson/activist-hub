import React, {Suspense} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "src/config/routes";
import { getUniqueKey } from "src/utils";

function App() {
  return (
    <Router>
        <Suspense fallback={<div>Loading....</div>}>
          <Switch>
          {routes.map(({ path, component, exact }) => (
            <Route
              key={getUniqueKey()}
              path={path}
              exact={exact}
              component={component}
            />
          ))}
          {/* <Route path="/404" component={PageNotFound} />
              <Redirect to={{ pathname: '/404' }} /> */}
          </Switch>
        </Suspense>
    </Router>
  );
}

export default App;
