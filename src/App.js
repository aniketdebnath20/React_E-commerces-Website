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
import ProductPage from './ProductPage';

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
      path: "/ProductPage",
      element: <><Navbar /> <ProductPage /> </>
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
