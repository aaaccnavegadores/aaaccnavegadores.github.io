import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import CodigoDeConduta from './pages/CodigoDeConduta';
import QueroAssociar from './pages/QueroAssociar';
import ErrorPage from './pages/ErrorPage'; // Importe o componente de erro

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/codigo-de-conduta" element={<CodigoDeConduta />} />
      <Route path="/quero-associar" element={<QueroAssociar />} />
      {/* Rota para o componente de erro - deve ser a última rota */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;