// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();

import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Orders from './components/Orders';
import OrdersDetails from './components/OrdersDetails';
import Products from './components/Products';
import Manage from './components/Manage';
import Accounts from './components/Accounts';
import Customers from './components/Customers';
import Payment from './components/Payment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'antd/dist/antd.css';

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<Products />} />
      <Route path="/manage" element={<Manage />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/payment" element={<Payment />} />
      
      <Route path="/ordersdetails" element={<OrdersDetails />} />

      <Route exact path="/" element={<Login />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "product",
//         element: <Product />,
//       },
//       {
//         path: "reports",
//         element: <Reports />,
//       },
//     ],
//   },

//   // {
//   //   path: '/',
//   //   element: <Home />,
//   // },
//   // {
//   //   path: 'product',
//   //   element: <Product />,
//   // },
//   // {
//   //   path: 'reports',
//   //   element: <Reports />,
//   // },
// ]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
