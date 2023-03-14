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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/personal-details' element={<PersonalDetailsPage />} />
        <Route path='/home-page' element={<HomePage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/settings-help' element={<SettingsHelp />} />
        <Route path='/about' element={<About />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
