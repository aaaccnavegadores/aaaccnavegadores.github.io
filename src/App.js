import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './Routes';
import Footer from './components/Footer';

const App = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar
          showSubMenu={showSubMenu}
          toggleSubMenu={toggleSubMenu}
        />
        <div className="container mx-auto mt-4 flex-1">
          <AppRoutes /> {/* Adiciona o componente de rotas aqui */}
        </div>
        <Footer className="mt-auto" /> {/* Renderiza o Footer no final da página */}
      </div>
    </Router>
  );
}

export default App;