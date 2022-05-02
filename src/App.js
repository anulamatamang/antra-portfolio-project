import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import ContactPage from './pages/contactpage/ContactPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
