import './App.scss';
import Homepage from './homepage/Homepage.js'
import CoursesMain from './coursesMain/CoursesMain'
import CourseDetails from './courseDetails/CourseDetails.js'
import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <>

     <Router>
        <Header />
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/courses" element={<CoursesMain />}></Route>
              <Route path="/courses/:courseID" element={<CourseDetails />}></Route>
            </Routes>
        <Footer />
     </Router>

    </>
  );
}

export default App;
