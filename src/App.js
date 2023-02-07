import './App.css';
import Login from './containers/Login';
import Welcome from './containers/Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from './containers/SignUpPage';
import ForgotPasswordPage from './containers/ForgotPassword';
import PersonalDetailsPage from './containers/PersonalDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/personal-details' element={<PersonalDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
