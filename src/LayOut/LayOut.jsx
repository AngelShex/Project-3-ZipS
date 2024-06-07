import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Pages............
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'


export default function LayOut() {
    const router = createBrowserRouter([
    {
       path: '/login',
       element : <Login />
    },
    {
        path: '/signup',
        element : <Signup />
     },
    ])
    return (
        <>
          <RouterProvider router={router} />
        </>
    )
}