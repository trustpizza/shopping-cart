import Homepage from "../pages/Homepage";
import Shop from "../pages/Shop";

import Error404 from "../pages/error/404";

const routes = [
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error404 />
  },
  {
    path: "shop",
    element: <Shop />
  }
]

export default routes;