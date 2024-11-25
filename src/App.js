import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Navbar from './Compnet/_Navbar';
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /> <Home /> </>
    },
    {
      path: "/About",
      element: <><Navbar /> <About /> </>
    },
    {
      path: "/Contact",
      element: <><Navbar /> <Contact /> </>
    },
    {
      path: "/Product",
      element: <><Navbar /> <Product /> </>
    },
    {
      path: "/Cart",
      element: <><Navbar /> <Cart /> </>
    },
    {
      path: "/SingleProduct/:id",
      element: <><Navbar /> <SingleProduct /> </>
    },
    {
      path: "*",
      element: <><Navbar /> <ErrorPage /> </>
    }
  ]);
  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
