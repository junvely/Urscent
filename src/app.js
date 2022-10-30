import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Notes from "./pages/notes";
import Login from "./pages/login";
import Perfumer from "./pages/perfumer";
import PerfumeBrand from "./pages/perfume-brand";
import SignUp from "./pages/sign-up";
import MyPage from "./pages/my-page";
import MyLikeList from "./pages/my-like-list";
import PrivacyPolicy from "./components/privacy-policy";

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
      <Route path="/my-like-list" element={<MyLikeList />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
