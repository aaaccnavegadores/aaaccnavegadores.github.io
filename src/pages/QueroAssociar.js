import React from 'react';
import logo from './../assets/img/ajbn8-o7aix.svg';

const QueroAssociar = () => {
  return (
    <div className="container mx-auto px-4 py-16 mb-32">
      <div className="flex flex-col md:flex-row items-center justify-center mb-32">
        <div className="md:w-1/2 md:pr-8">
          <p className="text-lg text-white mb-4">
            Junte-se à Atlética Navegadores e aproveite uma série de vantagens exclusivas. Como associado, você terá acesso a descontos especiais em produtos da Store Nave, participação em festas e eventos ao longo do ano, além de oportunidades únicas para networking e integração.
          </p>
          <p className="text-lg text-white mb-4">
            Para se inscrever, basta enviar um email para <span className="text-green-500">associacao@navegadores.com</span> manifestando seu interesse. Não perca a chance de fazer parte dessa experiência incrível!
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={logo} alt="Logo da Empresa" className="w-full max-w-xs" />
        </div>
      </div>     
    </div>
  );
};

export default QueroAssociar;