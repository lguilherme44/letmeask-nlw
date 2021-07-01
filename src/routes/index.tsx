import { Route, Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { Room } from "../pages/Room";
import { NewRoom } from "../pages/NewRoom";
import { AdminRoom } from "../pages/AdminRoom";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" exact component={NewRoom} />
      <Route path="/rooms/:id" component={Room} />

      <Route path="/admin/rooms/:id" component={AdminRoom} />
    </Switch>
  );
}
