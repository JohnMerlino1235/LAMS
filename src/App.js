import './App.css';
import Login from './containers/Login';
import Welcome from './containers/Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from './containers/SignUpPage';
import ForgotPasswordPage from './containers/ForgotPassword';
import PersonalDetailsPage from './containers/PersonalDetailsPage';
import HomePage from './containers/HomePage';
import Profile from './containers/Profile';
import Messages from './containers/Messages';
import SettingsHelp from './containers/SettingsHelp';
import About from './containers/About';
import Calibrate from './containers/CalibratePage';
import Instructions from './containers/Instructions';
import Exercise from './containers/Exercise';
import ToDo from './containers/ToDo';
import Results from './containers/Results';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/personal-details' element={<PersonalDetailsPage />} />
        <Route path='/home-page/:email' element={<HomePage />} />
        <Route path='/profile/:email' element={<Profile />} />
        <Route path='/messages/:email' element={<Messages />} />
        <Route path='/settings-help/:email' element={<SettingsHelp />} />
        <Route path='/about/:email' element={<About />} />
        <Route path='/instructions' element={<Instructions />} />
        <Route path='/calibrate' element={<Calibrate />} />
        <Route path='/exercise' element={<Exercise />} />
        <Route path='/todo' element={<ToDo />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
