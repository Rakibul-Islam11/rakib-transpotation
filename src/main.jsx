import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './all-components/home/Home.jsx'
import SeatSelect from './all-components/seat-select/SeatSelect.jsx'
import About from './all-components/about/About.jsx'
import Contact from './all-components/contact/Contact.jsx'
import RouteError from './all-components/router-error/RouteError.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        index: true, // Default route
        element: <Home></Home>,
      },
      {
        path: 'home',
        element: <Home></Home>
        
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'seatSelect',
        loader: () => fetch('fareData.json'),
        element: <SeatSelect></SeatSelect>
      },
      {
        path: '*',
        element: <RouteError></RouteError>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
