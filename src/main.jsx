import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as React from "react";  // Keep this import for React

import Form from './Form/Form';
import Main from './Layout/Main';
import Product from './Product/Product';
import UpdateProduct from './ProductUpdate/UpdateProduct';
import UpdateForm from './ProductUpdate/UpdateForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      
      {
        path: '/a',
        element: <Form></Form>
      },
      {
        path: "/",
        element: <Product></Product>,
      },
      {
        path: "/u",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/u/u/:id", // Route to update a specific product
        element: <UpdateForm></UpdateForm>,
        loader: ({ params }) => fetch(`http://localhost:5000/api/product/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
