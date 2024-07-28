import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './ui/Header.tsx';
import App from './App.tsx';
import Cancel from './pages/Cancel.tsx';
import Cart from './pages/Cart.tsx';
import Category from './pages/Category.tsx';
import Favorite from './pages/Favorite.tsx';
import NotFound from './pages/NotFound.tsx';
import Orders from './pages/Orders.tsx';
import Product from './pages/Product.tsx';
import Profile from './pages/Profile.tsx';
import Success from './pages/Success.tsx';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path : "/cancel",
        element : <Cancel/>
      },
      {
        path : "/cart",
        element : <Cart/>
      },
      {
        path : "/category",
        element : <Category/>
      },
      {
        path : "/favorite",
        element : <Favorite/>
      },
      {
        path : "*",
        element : <NotFound/>
      },
      {
        path : "/orders",
        element : <Orders/>
      },
      {
        path : "/product",
        element : <Product/>
      },
      {
        path : "/profile",
        element : <Profile/>
      },
      {
        path : "/success",
        element : <Success/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
