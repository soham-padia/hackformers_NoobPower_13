import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { HOME_PAGE, LOGIN_PAGE } from './constants/RouteConstants'
import './index.css'

const Router= createBrowserRouter([
  {
    path: HOME_PAGE,
    element: <HomePage></HomePage>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>,
)
