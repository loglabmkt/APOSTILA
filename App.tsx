
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ModulePage from './pages/ModulePage';
import SectionPage from './pages/SectionPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ProgressHistoryPage from './pages/ProgressHistoryPage'; 
import { CourseProgressProvider } from './contexts/CourseProgressContext';
import { AuthProvider } from './contexts/AuthContext';
import { GlossaryProvider } from './contexts/GlossaryContext'; // Import Provider
import ProtectedRoute from './components/ProtectedRoute';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <CourseProgressProvider>
          <GlossaryProvider> {/* Wrap routes with GlossaryProvider */}
            <Routes>
              {/* Rotas públicas */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              {/* Rotas protegidas */}
              <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/modules/:moduleId" element={<ModulePage />} />
                  <Route path="/modules/:moduleId/sections/:sectionId" element={<SectionPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/history" element={<ProgressHistoryPage />} />
                </Route>
              </Route>
            </Routes>
          </GlossaryProvider>
        </CourseProgressProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
