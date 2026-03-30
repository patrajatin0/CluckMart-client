import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Body from "./Body.jsx"
import Login from "./pages/Login.jsx"
import Navbar from "./components/Navbar.jsx"
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Products from "./pages/Products.jsx"



const Main = () => {
  return (
    < >
      <Navbar />
      <Outlet />


    </>

  )
}


const appLayout = createBrowserRouter([{
  path: "/",
  element: <Main />,
  children: [
    {
      index: true,
      element: <Body />
    },
    {
      path: "login",
      element: <Login />
    }, {
      path: "signup",
      element: <Register />
    }, {
      path: "home",
      element: <Home />
    },
    {
      path: "product",
      element: <Products />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appLayout} />
  </StrictMode>
)
export default Main