import { Home } from "pages/home/home.page";

export interface IRouterType {
  title: string;
  path: string;
  element: JSX.Element;
}

const pagesData: IRouterType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
];

export default pagesData;
