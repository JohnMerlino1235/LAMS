import './App.css';
import Login from './containers/Login/Login';
import Welcome from './containers/Welcome/Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from './containers/SignUp/SignUpPage';
import ForgotPasswordPage from './containers/ForgotPassword/ForgotPassword';
import PersonalDetailsPage from './containers/PersonalDetails/PersonalDetailsPage';
import HomePage from './containers/HomePage/HomePage';
import Profile from './containers/Profile/Profile';
import Messages from './containers/Messages/Messages';
import SettingsHelp from './containers/SettingsHelp/SettingsHelp';
import About from './containers/About/About';
import Calibrate from './containers/Calibrate/CalibratePage';
import Instructions from './containers/Instructions/Instructions';
import Exercise from './containers/Exercise/Exercise';
import MyNotebook from './containers/MyNotebook/MyNotebook';
import Results from './containers/Results/Results';
import "./containers/css/global.css";
import "./containers/css/home-page.css";
import "./containers/css/hamburger-menu.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/personal-details" element={<PersonalDetailsPage />} />
        <Route path="/home-page/:email" element={<HomePage />} />
        <Route path="/profile/:email" element={<Profile />} />
        <Route path="/messages/:email" element={<Messages />} />
        <Route path="/settings-help/:email" element={<SettingsHelp />} />
        <Route path="/about/:email" element={<About />} />
        <Route path="/instructions/:email" element={<Instructions />} />
        <Route path="/calibrate/:email" element={<Calibrate />} />
        <Route path="/exercise/:email/:comPort" element={<Exercise />} />
        <Route path="/notebook/:email" element={<MyNotebook />} />
        <Route path="/results/:email" element={<Results />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
