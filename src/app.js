import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Notes from "./pages/notes";
import Login from "./pages/login";
import Perfumer from "./pages/perfumer";
import PerfumeBrand from "./pages/perfume-brand";
import SignUp from "./pages/sign-up";
import MyPage from "./pages/my-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfumer" element={<Perfumer />} />
      <Route path="/perfume-brand" element={<PerfumeBrand />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/my-page" element={<MyPage />} />
    </Routes>
  );
}

export default App;
