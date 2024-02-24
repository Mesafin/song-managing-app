import "./App.css";
import { Route, Routes } from "react-router-dom";
import SongList from "./pages/SongList";
import { ConnectedStatistics } from "./pages/Statistics";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song-list" element={<SongList />} />
        <Route path="/statistics" element={<ConnectedStatistics />} />
      </Routes>
    </>
  );
};

export default App;
