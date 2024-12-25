import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {
  HomeLayout_xx,
  HomePage_xx,
  BlogStaticPage_xx,
  BlogNodePage_xx,
  BlogSupaPage_xx,
  BlogSupaPage2_xx,
} from './pages'

import { P1Page_xx, P2Page_xx, P3Page_xx, P4Page_xx } from './pages/mid_xx'

import BooksPage1_xx from './pages/quiz2/q1_xx/BooksPage1_xx'
import BooksPage2_xx from './pages/quiz2/q2_xx/BooksPage2_xx'
import GroceryPage_xx from './pages/quiz2/q3_xx/GroceryPage_xx'
import BlogJsonPage_xx from './pages/quiz2/q4_xx/BlogJsonPage_xx'

import S1Page_23 from './pages/final/s1_xx/S1Page_xx'
import S2Page_xx from './pages/final/s2_xx/S2Page_xx'
import S3Page_xx from './pages/final/s3_xx/S3Page_xx'
import S4Page_xx from './pages/final/s4_xx/S4Page_xx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout_xx />,
    children: [
      {
        index: true,
        element: <HomePage_xx />,
      },
      {
        path: 'static_xx',
        element: <BlogStaticPage_xx />,
      },
      {
        path: 'node_xx',
        element: <BlogNodePage_xx />,
      },
      {
        path: 'supa_xx',
        element: <BlogSupaPage_xx />,
      },
      {
        path: 'supa2_xx',
        element: <BlogSupaPage2_xx />,
      },
    ],
  },
  {
    path: '/mid_xx',
    element: <HomeLayout_xx />,
    children: [
      {
        path: 'p1_xx',
        element: <P1Page_xx />,
      },
      {
        path: 'p2_xx',
        element: <P2Page_xx />,
      },
      {
        path: 'p3_xx',
        element: <P3Page_xx />,
      },
      {
        path: 'p4_xx',
        element: <P4Page_xx />,
      },
    ],
  },
  {
    path: '/quiz2',
    element: <HomeLayout_xx />,
    children: [
      {
        path: 'q1_xx',
        element: <BooksPage1_xx />,
      },
      {
        path: 'q2_xx',
        element: <BooksPage2_xx />,
      },
      {
        path: 'q3_xx',
        element: <GroceryPage_xx />,
      },
      {
        path: 'q4_23',
        element: <BlogJsonPage_xx />,
      },
    ],
  },
  {
    path: '/quiz2',
    element: <HomeLayout_xx />,
    children: [
      {
        path: 'S1_23',
        element: <S1Page_23 />,
      },
      {
        path: 'S2_23',
        element: <S2Page_xx />,
      },
      {
        path: 'S3_23',
        element: <S3Page_xx />,
      },
      {
        path: 'S4_23',
        element: <S4Page_xx />,
      },
    ],
  },
])

const App_xx = () => {
  return <RouterProvider router={router} />
}

export default App_xx
