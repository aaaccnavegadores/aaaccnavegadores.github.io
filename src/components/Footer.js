import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16">
          <div className="flex flex-col items-center text-center">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/aaaccnavegadores"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/aaaccnavegadores"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/atleticanave"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FiTwitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-gray-300 mt-2">
              &copy; {new Date().getFullYear()} aaaccnavegadores. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
      {/* Gradiente fixo no rodapé */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -z-10 xl:-bottom-6">
        <div className="aspect-w-16 aspect-h-9 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
      </div>
    </footer>
  );
}

export default Footer;
