import React, { lazy, Suspense } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import Loader from "@iso/components/utility/loader";

const routes = [
  {
		path: '',
		component: lazy(() => import('@iso/containers/Widgets/Widgets')),
		exact: true,
	},
  {
    path: "table_ant",
    component: lazy(() => import("@iso/containers/Tables/AntTables/AntTables")),
  },
  
  {
    path: "product",
    component: lazy(() => import("@iso/containers/Masters/Product/Product")),
  },
  {
    path: "currency",
    component: lazy(() => import("@iso/containers/Masters/Currency/Currency")),
  },
  {
    path: "designation",
    component: lazy(() => import("@iso/containers/Masters/Designation/Designation")),
  },
  {
    path: "durationType",
    component: lazy(() => import("@iso/containers/Masters/DurationType/DurationType")),
  },
  {
    path: "client",
    component: lazy(() => import("@iso/containers/Client/Index")),
  }
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
