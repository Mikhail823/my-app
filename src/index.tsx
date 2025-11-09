import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import './assets/scss/normalize.scss'
import { ToDOListPage } from './pages/ToDOListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layout/Layout';




const todos: ToDo[] = [
  {
    id: 1,
    text: 'Первое действие',
    isDone: false
  },
   {
    id: 2,
    text: 'Второе действие',
    isDone: true
  },
   {
    id: 3,
    text: 'Третье действие',
    isDone: false
  },
   {
    id: 4,
    text: 'Четвертое действие',
    isDone: true
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos}/>
      },
      {
        path: '/todo',
        element: <ToDOListPage/>
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos}/>
      }, 
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
], {basename: '/app/'});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>    
  </React.StrictMode>
);
