
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Shared/Navbar/navbar';
import Headers from './Shared/Header';
import Enquiries from './Pages/Enquiries';
import Aside from './Aside/index';
import "./App.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main">
          <div className="left-container">
          <Navbar/>
          </div>
          <div className="right-container">
            <Headers/>
            <div className="aside-container">
            <Routes>
              <Route path="/" element={<Enquiries />}>
              </Route>
            </Routes>  
           
            </div>
          </div>
         
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
