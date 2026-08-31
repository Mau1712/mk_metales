import { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { RouteTransitionElement } from "./RouteTransition.elements";

export const RouteTransition = () => {
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);
  const hasNavigated = useRef(false);

  if (previousPathname.current !== pathname) {
    hasNavigated.current = true;
    previousPathname.current = pathname;
  }

  return (
    <RouteTransitionElement key={pathname} $animate={hasNavigated.current}>
      <Outlet />
    </RouteTransitionElement>
  );
};
