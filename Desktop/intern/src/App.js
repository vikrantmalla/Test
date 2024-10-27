import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navb from './components/Navbar/Navb';
import FrontPage from './components/FrontPage/FrontPage';
import Footer from './components/Footer/Footer';
import WebDevelopment from './components/WebTechnology/WebDevelopment';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navb />
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route exact path="/components/WebTechnology/WebDevelopment" element={<WebDevelopment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
