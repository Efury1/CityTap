import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/auth" element={<Auth />} />
       </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
