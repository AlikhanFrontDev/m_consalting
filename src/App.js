import './App.css';
import { Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import WorkCountries from './pages/WorkCountries';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="wcon" element={<WorkCountries />} />
        {/* <Route path="countries/:id/university/:id" element={<SinglePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
