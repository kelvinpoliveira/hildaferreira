import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider } from './stores/RootStore';
import { AnalyticsContext, trackPageView } from './services/ga/AnalyticsContext';
import Home from './views/Home';
import SupportPage from './views/SupportPage';
import './App.css';

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Ouvidoria" element={<SupportPage />} />
    </Routes>
  );
}

function App() {
  // Define basename based on environment
  const basename = process.env.NODE_ENV === 'production' ? '/hildaferreira' : '';
  
  return (
    <StoreProvider>
      <AnalyticsContext.Provider value={{ trackPageView }}>
        <Router basename={basename}>
          <AppRoutes />
        </Router>
      </AnalyticsContext.Provider>
    </StoreProvider>
  );
}

export default App;
