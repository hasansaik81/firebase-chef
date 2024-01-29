import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import ChefRecipes from './components/chefsRecipe/ChefRecipes.jsx'
import Chefs from './components/chefs/Chefs.jsx'
import Blogs from './components/Blog/Blogs.jsx'
import About from './components/about/About';
import Login from './components/login/Login.jsx'
import PrivateRoute from './components/priviateRoute/PrivateRoute';
import NotFound from './components/4o4notFound/NotFound.jsx'
import AuthProvider from './authProvider/AuthProvider.jsx'
import SignUp from './components/registration/SignUp.jsx'


const router=createBrowserRouter([
  {

    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/ChefRecipes/:id',
        element:  <PrivateRoute>   <ChefRecipes/> </PrivateRoute>,
      
        loader:({params})=>fetch('https://my-server-d3mdc9wg0-hasans-projects-3bda48be.vercel.app/')
      },
      {
        path: '/chefs',
        element: <Chefs></Chefs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <SignUp></SignUp>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> 
      <RouterProvider router={router} />
      </AuthProvider>
      
      </React.StrictMode>,
)
