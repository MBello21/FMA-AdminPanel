import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { StoreProvider } from './context/store-context/StoreProvider'
import { RouterProvider } from 'react-router'
import { router } from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </StoreProvider>
  </React.StrictMode>
)

