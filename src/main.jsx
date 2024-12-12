import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './all-components/home/Home.jsx'
import SeatSelect from './all-components/seat-select/SeatSelect.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: 'home',
        element: <Home></Home>
        
      },
      {
        path: 'seatSelect',
        element: <SeatSelect></SeatSelect>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
