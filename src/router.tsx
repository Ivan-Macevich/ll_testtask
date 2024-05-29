import pagesData, { IRouterType } from "pagesData";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: IRouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};
