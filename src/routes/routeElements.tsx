import { useRoutes } from "react-router-dom";
import HomePage from "src/pages/HomePage";

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/sign-in",
      element: <div>Sign in</div>,
    },
    {
      path: "/settings",
      element: <div>Settings</div>,
    },
  ]);
  return routeElements;
}
