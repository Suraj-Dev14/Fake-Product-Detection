import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { LoginPage } from "./Pages/LoginPage";
import { SignupPage } from "./Pages/SignUpPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default App;
