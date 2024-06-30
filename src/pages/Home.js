// pages/Home.js
import React, { useState } from 'react';
import logo from './../assets/img/ajbn8-o7aix.svg';
import Tab from './../components/Tab';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Calouradas');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-4xl text-white font-bold mb-4">Bem-vindo à nossa página!</h2>
          <p className="text-lg text-white mb-4">
            Esta é uma frase em destaque para chamar a atenção dos visitantes. Aproveite e conheça mais sobre nossos serviços e benefícios.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={logo} alt="Logo da Empresa" className="w-full max-w-xs" />
        </div>
      </div>
      
      <div className="w-full">
        <div className="tabs flex justify-center border-b-2 mb-4">
          <button 
            className={`px-4 py-2 ${activeTab === 'Calouradas' ? 'border-b-4 border-white text-white' : 'text-white hover:text-white hover:bg-gray-700'}`} 
            onClick={() => handleTabClick('Calouradas')}
          >
            CALOURADAS
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'Esportes' ? 'border-b-4 border-white text-white' : 'text-white hover:text-white hover:bg-gray-700'}`} 
            onClick={() => handleTabClick('Esportes')}
          >
            ESPORTES
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'Games' ? 'border-b-4 border-white text-white' : 'text-white hover:text-white hover:bg-gray-700'}`} 
            onClick={() => handleTabClick('Games')}
          >
            GAMES
          </button>
        </div>

        <div className="tab-content">
          <Tab tabKey={activeTab} />
        </div>
      </div>
    </div>
  );
};
export default Home;
