import React from 'react';
import ImageCarousel from './ImageCarousel';
import image1 from './../assets/img/21.04.2023.jpg'
import image2 from './../assets/img/WhatsApp Image 2024-06-16 at 11.00.05.jpeg'
import image3 from './../assets/img/IMG-20240324-WA0011.jpg'

import figura1 from './../assets/slides/COMPUTARIACUBO (115).jpg'
import figura2 from './../assets/slides/NAVEGADORES (72).jpg'
import figura3 from './../assets/slides/NAVEGADORES (101).jpg'
import figura4 from './../assets/slides/NAVEGADORES (169).jpg'
import figura5 from './../assets/slides/NAVEGADORES (91).jpg'
import figura6 from './../assets/slides/NAVEGADORES (187).jpg'
import figura7 from './../assets/slides/NAVEGADORES (191).jpg'
import figura8 from './../assets/slides/NAVEGADORES (227).jpg'
import figura9 from './../assets/slides/NAVEGADORES (29).jpg'
import figura10 from './../assets/slides/NAVEGADORES (293).jpg'
import figura11 from './../assets/slides/NAVEGADORES (153).jpg'
import figura12 from './../assets/slides/NAVEGADORES (101).jpg'
import figura13 from './../assets/slides/NAVEGADORES (169).jpg'
import figura14 from './../assets/slides/NAVEGADORES (183).jpg'
import figura15 from './../assets/slides/NAVEGADORES (227).jpg'
import figura16 from './../assets/slides/NAVEGADORES (188).jpg'
import figura17 from './../assets/slides/NAVEGADORES (367).jpg'


import fig1 from './../assets/slides/IMG_1864.JPG'
import fig2 from './../assets/slides/IMG_1865.JPG'
import fig3 from './../assets/slides/IMG_1870.JPG'
import fig4 from './../assets/slides/IMG_1873.JPG'
import fig5 from './../assets/slides/IMG_1879.JPG'
import fig6 from './../assets/slides/IMG_1919.JPG'
import fig7 from './../assets/slides/IMG_1953.JPG'
import fig8 from './../assets/slides/IMG_2011.JPG'
import fig9 from './../assets/slides/IMG_2273.JPG'

const Tab = ({ tabKey }) => {

  const initialImages = [
    figura1,
    figura2,
    figura3,
    figura4,
    figura5,
    figura6,
    figura7,
    figura8,
    figura9,
    figura10,
    figura11,
    figura12,
    figura13,
    figura14,
    figura15,
    figura16,
    figura17,
  ]

  const initialImagesGames = [
    fig1,
    fig2,
    fig3,
    fig4,
    fig5,
    fig6,
    fig7,
    fig8,
    fig9,
    
  ]

  return (
    <div className="p-4 rounded-lg animate-fade-in">
      {tabKey === 'Calouradas' && (
        <div>
          <p className="text-white">
            A Calourada, conhecida como Computaria, ocorre duas vezes ao ano, uma no início de cada semestre. Esses eventos são uma excelente oportunidade para dar boas-vindas aos novos alunos do curso de Computação. Além disso, proporcionam uma chance valiosa para os calouros fazerem networking com colegas do curso, conhecer veteranos e se enturmar com outras pessoas. A Computaria inclui uma série de atividades sociais, workshops e palestras que ajudam na integração e no desenvolvimento dos alunos.
          </p>
          <br />
          <ImageCarousel images={initialImages} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div>
              <a href="https://drive.google.com/" target="_blank" rel="noopener noreferrer">
                <img src={image1} alt="Drive Foto 1" className="rounded-lg w-full h-full object-cover" />
              </a>
            </div>
            <div>
              <a href="https://drive.google.com/" target="_blank" rel="noopener noreferrer">
                <img src={image2} alt="Drive Foto 2" className="rounded-lg w-full h-full object-cover" />
              </a>
            </div>
            <div>
              <a href="https://drive.google.com/" target="_blank" rel="noopener noreferrer">
                <img src={image3} alt="Drive Foto 3" className="rounded-lg w-full h-full object-cover" />
              </a>
            </div>
           
          </div>
        </div>
      )}
      {tabKey === 'Esportes' && (
        <div>
          <p className="text-white">
            Oferecemos várias opções esportivas para os acadêmicos do curso de Computação, incluindo times masculinos de futsal, vôlei e basquete, além de um time de vôlei feminino. As atividades esportivas não só promovem a saúde física e mental dos participantes, mas também são uma oportunidade para participar da AAACCN (Associação Atlética Acadêmica de  Ciência da Computação), onde os alunos podem socializar, relaxar e competir em eventos intercursos e copa atléticas.
          </p>
          <br />
          {/* <ImageCarousel images={initialImagesGames} /> */}
        </div>
      )}
      {tabKey === 'Games' && (
        <div>
          <p className="text-white">
            Transmitimos campeonatos de jogos populares, como League of Legends (LoL) e Valorant ao vivo na Twitch. Nossa plataforma de streaming transmite semanalmente as transmissões, permitindo que nossos membros e qualquer amante de game acompanhe as nossas partidas em tempo real..
          </p>
          <br />
          <p className="text-white">
            Também oferecemos sessões de treino regulares para nossos jogadores, nos seguintes dias e horários no Discord:
          </p>
          <ul className="text-white flex space-x-4 mt-8">
            <li><strong>League of Legends (LoL):</strong> Segundas, Quartas e Sextas às 19:00hrs</li>
            <li><strong>Valorant:</strong> Terças e Quintas às 20:00hrs</li>
          </ul>
          <p className="text-white">
            Essas sessões são essenciais para o desenvolvimento das habilidades dos jogadores e para a preparação para os campeonatos futuros. Fique ligado em nossas redes sociais para atualizações sobre as próximas transmissões e eventos.
          </p>
          <br />
          <ImageCarousel images={initialImagesGames} />
        </div>
      )}
    </div>
  );
};

export default Tab;