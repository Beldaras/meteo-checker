import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAuthContext } from "./contexts/authContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoutes user={user} />}>
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
