import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthProvider from './provider/AuthProvider.jsx'
import Main from './pages/Main.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Banner from './pages/Banner.jsx'
import Header from './pages/Header.jsx'
import NotFound from './pages/NotFound.jsx'
import ProductList from './components/ProductList.jsx'
import AddCraftList from './protectedRoute/AddCraftList.jsx'
import PrivateRoute from './protectedRoute/PrivateRoute.jsx'
import AllArtItem from './components/AllArtItem.jsx'
import ItemDetails from './components/ItemDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Header></Header>
      },
      {
        path: '/allItem',
        element: <AllArtItem></AllArtItem>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: '/addCraft',
        element: <PrivateRoute><AddCraftList></AddCraftList></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/itemDetail/:id',
        element: <ItemDetails></ItemDetails>,
        loader : ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
