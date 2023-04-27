import React,{ useState } from "react";
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ViewClients from "./AddUpdateView/ViewClients";
import MembershipCreateOrUpdate from "./Membership/MembershipCreateOrUpdate";
import AddClients from "./AddUpdateView/AddClients";

const Client = () => {
  const match = useRouteMatch();
  return (
        <>
          <Switch>
            <Route exact path={`${match.path}`} component={ViewClients}/>
            <Route exact path={`${match.path}/membership`} component={MembershipCreateOrUpdate}/>
            <Route exact path={`${match.path}/:id`} component={AddClients}/>
          </Switch>
        </>
  );
};

export default Client;
