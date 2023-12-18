import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPages from './Pages/FormPages';
import ShowProducts from './Pages/ShowProducts';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FormPages />} />
          <Route path="/show" element={<ShowProducts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
