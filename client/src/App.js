import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import "./style.scss"

import Home from "./pages/Home";
import Login from "./pages/Login";
import Reginster from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";


const Layout = () => {
  return (
  <>
    <Navbar/>
    <Outlet />
    <Footer/>
  </>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/post/:id",
        element: <div><Single/></div>,
      },
      {
        path: "/post/write",
        element: <div><Write/></div>,
      },
    ]
  },
  {
    path: "/login",
    element: <div>
              <Login/>
             </div>,
  },
  {
    path: "/register",
    element: <div><Reginster/></div>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
