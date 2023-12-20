
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contest from "./pages/contest"
import Home from "./pages/home"
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import About from './pages/about'
import Services from './pages/services'
import Community from './pages/community'
import Blog from './pages/comm_blog'
import Registration from './pages/registration'
import Trash from './pages/trash'
import Layout from './pages/layout'
const Rout = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/", 
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "/contest",
        element: <Contest />,
      },
      {
        path: "/community",
        children: [
          {
            path: "/community", 
            element: <Community/>,
          },
          {
            path: "/blogs",
            element: <Blog/>,
          },
        ],
      },
    ],
  },
];

export default Rout;
