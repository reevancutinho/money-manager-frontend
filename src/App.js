import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './page/Home';
import Report from "./page/Report";
import AddExpense from "./page/AddExpense";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/reports" element={<Report/>} />
          {/* <Route path="/expense" element={<AddExpense/>} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;