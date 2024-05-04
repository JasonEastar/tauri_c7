import { ReactElement } from "react";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";

interface IRoute {
  path: string;
  component: (props: any) => ReactElement;
  isMain: boolean;
  isAuth?: boolean;
  layout?: (props: any) => ReactElement;
  type?: string; // 'main', 'child','second'
}

export const mainRoutes: IRoute[] = [
  {
    path: "login",
    component: LoginPage,
    isMain: false,
    isAuth: false,
    type: "full",
  },
  {
    path: "",
    component: HomePage,
    isMain: false,
    isAuth: true,
  },
];
