import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Pages/Home";
import Login from "./component/Login";
import ProtectedRoute from "./component/ProtectedRoute";
import LandingPage from "./component/LandingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
