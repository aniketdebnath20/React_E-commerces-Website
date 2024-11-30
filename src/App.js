import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Product from './Product'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import Error from './Error'
import Navbar from './Compnet/_Navbar';
import Loader from './Loader/Loader';

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
      path: "/Loader",
      element: <><Navbar /> <Loader /> </>
    },
    {
      path: "/SingleProduct/:id",
      element: <><Navbar /> <SingleProduct /> </>
    },
    {
      path: "*",
      element: <> <Error /> </>
    }
  ]);
  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
