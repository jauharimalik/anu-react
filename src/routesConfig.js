import React from "react";
import Regis from "./Regis";
import List from "./List";

const routesConfig = [
  {
    path: "/",
    element: <Regis />,
  },
  {
    path: "/list",
    element: <List />,
  },
];

export default routesConfig;
