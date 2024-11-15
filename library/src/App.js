import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './mycomponents/Login/Login.jsx';
import ReaderPage from './mycomponents/ReaderPage/ReaderPage.jsx';
import LibrarianPage from './mycomponents/LibrarianPage/LibrarianPage.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reader" element={<ReaderPage />} />
          <Route path="/librarian" element={<LibrarianPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
