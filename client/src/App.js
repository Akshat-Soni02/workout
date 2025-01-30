import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage.jsx';
import SignupPage from './pages/auth/signupPage/SignupPage.jsx';
import LoginPage from './pages/auth/loginPage/LoginPage.jsx';
import MainPage from './pages/MainPage/Mainpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<SignupPage/>} />
          <Route path="/mainpage" element={<MainPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
