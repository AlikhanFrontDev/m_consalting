import './App.css';
import { Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import WorkCountries from './pages/WorkCountries';
import Works from './pages/Works';
import SingleWork from './pages/SingleWork';
import Form from './pages/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="wcon" element={<WorkCountries />} />
        <Route path="works" element={<Works />} />
        <Route path="single" element={<SingleWork />} />
        <Route path="form" element={<Form />} />
        {/* <Route path="countries/:id/university/:id" element={<SinglePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
