import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './components/Main/Main';
import AuthProviders from './Providers/AuthProviders';
import Order from './components/Order/Order';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([{
  path: '/',
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/login',
      element: <Login></Login>,
    },
    {
      path: '/register',
      element: <Register></Register>,
    },
    {
      path:'/order',
      element:<PrivateRoute><Order></Order></PrivateRoute>,
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
