import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contest from "./pages/contest"
import Home from "./pages/home"
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import About from './pages/about'
import Services from './pages/services'
import Community from './pages/community'
import Blog from './pages/comm_blog'

export default function Example() {

  // const usePath = () => {
  //   const location = useLocation();
  //   return location.pathname;
  // };

  // Define an array of paths where Navbar should be displayed
  // const showNavbarPaths = ['/', '/home', '/contest'];

  // // Check if the current path should display the Navbar
  // const currentPath = usePath();
  // const showNavbar = showNavbarPaths.includes(currentPath);

  return (
    <>

<Navbar />


      <Router>
       
        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contest" element={<Contest />} />
          <Route exact path="/community" element={<Community />} />
          <Route exact path="/community/blogs" element={<Blog/>} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </Router>



    </>
  )
}
