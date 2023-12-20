// import './App.css'
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './pages/layout';
// import Rout from './routes'; // Import the route configuration

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Define your routes here */}
//         {Rout.map((route, index) => (
//           <Route
//             key={index}
//             path={route.path}
//             element={route.element}
//           >
//             {/* Nested routes */}
//             {route.children && route.children.map((childRoute, childIndex) => (
//               <Route
//                 key={childIndex}
//                 path={childRoute.path}
//                 element={childRoute.element}
//               />
//             ))}
//           </Route>
//         ))}
//       </Routes>
//     </Router>
//   );
// }
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
import Registration from './pages/registration'
import Trash from './pages/trash'
import Sign from './sign'
 import CommonDiscussion from './pages/com_discussion'
import Read from './pages/read'

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
          <Route path="/registration" element={<Registration/>} />
          <Route path="/sign" element={<Sign/>}/>
          <Route path="/trash" element={<Trash/>}/>
          <Route path="/read"  element={<Read/>} />
          <Route path ="/trash" element={<Trash/>} />
           <Route path ="/community/discussions" element={<CommonDiscussion/>} /> 
        </Routes>
      </Router>



    </>
  )
}
