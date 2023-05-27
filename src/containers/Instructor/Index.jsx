import React,{ useState } from "react";
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ViewInstructor from "./AddUpdateView/ViewInstructor";
import AddInstructor from "./AddUpdateView/AddInstructor";

const Instructor = () => {
  const match = useRouteMatch();
  return (
        <>
          <Switch>
            <Route exact path={`${match.path}`} component={ViewInstructor}/>
            <Route exact path={`${match.path}/:id`} component={AddInstructor}/>
          </Switch>
        </>
  );
};

export default Instructor;
