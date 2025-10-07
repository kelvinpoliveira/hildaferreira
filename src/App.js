import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './stores/RootStore';
import { AnalyticsContext, trackPageView } from './services/ga/AnalyticsContext';
import Home from './views/Home';
import SupportPage from './views/SupportPage';
import './App.css';
import EducacaoInfantilPage from 'views/EducacaoInfantilPage';
import EnsinoFundamentalAnosIniciaisPage from 'views/EducacaoAnosIniciais';
import EnsinoFundamentalAnosFinaisPage from 'views/EducacaoAnosFinais';
import EnsinoMedioPage from 'views/EnsinoMedio';
import LinhaEticaPage from 'views/LinhaEtica';

function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Ouvidoria" element={<SupportPage />} />
      <Route path="/Infantil" element={<EducacaoInfantilPage />} />
      <Route path="/AnosIniciais" element={<EnsinoFundamentalAnosIniciaisPage />} />
      <Route path="/AnosFinais" element={<EnsinoFundamentalAnosFinaisPage />} />
      <Route path="/EnsinoMedio" element={<EnsinoMedioPage />} />
      <Route path="/LinhaEtica" element={<LinhaEticaPage />} />
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
