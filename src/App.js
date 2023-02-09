import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  {/* <Route path="blogs" element={<Blogs />} /> */}
                  {/* <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NoPage />} /> */}
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
