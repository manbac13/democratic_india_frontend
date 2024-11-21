import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import ComingSoon from "./Pages/ComingSoon";
import Explore from "./Pages/Explore";
import General2024 from "./Sections/Explore/general-election-2024";
import Dashboard from "./Sections/Explore/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/general-elections-2024" element={<General2024 />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
