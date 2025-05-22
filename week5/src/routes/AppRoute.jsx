import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectPage from '../pages/Project';
import DiaryPage from "../pages/Diary";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/diary" element={<DiaryPage />} />
      </Routes>
    </Router>
  );
}