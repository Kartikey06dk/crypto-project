// import './App.css';
// import Footer from './Components/Common/Footer';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import DashboradPage from "./pages/Dashboard";
import CoinPage from "./pages/Coin";
import ComparePage from "./pages/Compare";
import WatchlistPage from "./pages/Watchlist";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dashboard" element={<DashboradPage />}></Route>
        <Route path="/coin/:id" element={<CoinPage />}></Route>
        <Route path="/compare" element={<ComparePage />}></Route>
        <Route path="/watchlist" element={<WatchlistPage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;