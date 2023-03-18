import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { LoginPage } from './components/LoginPage'
import { SignupPage } from './components/SignupPage'
import { HOME_PAGE, LOGIN_PAGE, SIGNUP_PAGE } from './constants/RouteConstants'
import './index.css'

const Router= createBrowserRouter([
  {
    path: HOME_PAGE,
    element: <HomePage></HomePage>
  },
  {
    path:LOGIN_PAGE,
    element:<LoginPage></LoginPage>
  },
  {
    path:SIGNUP_PAGE,
    element:<SignupPage></SignupPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>,
)
