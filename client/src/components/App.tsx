import {Route, Switch} from 'react-router-dom';
import Home from '../pages';
import AboutPage from '../pages/aboutPage';
import CoursesPage from '../pages/coursesPage';
import Navbar from './Navbar/Navbar';
const App: React.FC = () => {
  return (
    <div className="Container">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route  path="/about">
        <AboutPage />
      </Route>
      <Route path="/courses">
        <CoursesPage />
      </Route>
      {/* <Route path="*">
        <h1>404 Page</h1>
      </Route> */}
    </div>
  )
}

export default App
