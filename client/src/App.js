import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage.jsx';
import SignupPage from './pages/auth/signupPage/SignupPage.jsx';
import LoginPage from './pages/auth/loginPage/LoginPage.jsx';
import WorkoutPage from './pages/workoutPlans/WorkoutPlans.jsx';
import TodayWorkoutPlans from './pages/todayWorkoutPlans/TodayWorkoutPlans.jsx'
import DaySelector from './components/days/DaySelector.jsx'
import EditExerciseCard from './components/editExerciseCard/EditExerciseCard.jsx'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<SignupPage/>} />
          <Route path="/workoutplans" element= {<WorkoutPage />} />
          <Route path="/todayworkoutplans" element= {<TodayWorkoutPlans />} />
          <Route path="/editexercise" element= {<EditExerciseCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
