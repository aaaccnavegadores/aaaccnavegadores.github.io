import React from 'react';
import './../assets/style.css';
import logo from './../assets/img/ajbn8-o7aix.svg';

const QuemSomos = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="md:w-1/2 md:pr-8">
          <div className="mb-2 text-white mt-8">
            <p>
              A carreira de uma atlética é uma história de amor, dedicação e serviço à  cada semestre, ano após ano, traz um tema específico de superação e conquista. Linha do tempo informa que...
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={logo} alt="Logo da Empresa" className="w-full max-w-xs" />
        </div>
      </div>
      <div className="timeline-container mt-16 md:mt-0">
        <ul>
          <li style={{ '--accent-color': '#41516C' }}>
            <div className="date">2021</div>
            <div className="descr text-white">
              Após uma pandemia que separou as pessoas e limitou o contato social, a atlética surgiu em um momento crucial. A vida universitária, que costumava ser cheia de atividades e interações, agora era desolada e isolada. 
              Precisávamos lidar com o desafio de não ter certeza de quem eram seus veteranos, calouros ou até mesmo colegas de classe. A atlética nasceu com um objetivo claro e audacioso nesse ambiente de desconexão: 
              reunir tribos, restabelecer vínculos e revitalizar a comunidade. A Computaria, no Bar Olímpicos de Chapecó, foi o primeiro grande empreendimento dessa nova era. Esse evento famoso, 
              estabeleceu um ponto de partida. Até então desconhecidos, veteranos e calouros se encontraram, contaram histórias, riram e construíram laços de amizade.
              O Bar Olímpicos, cheio de vitalidade e entusiasmo, foi o local onde se iniciou essa jornada de compaixão e celebração. A atlética não era apenas um esporte; era sobre criar um ambiente onde todos se sentissem apoiados, incluídos e motivados. A computação, com sua mistura de diversão, 
              integração e acolhimento representaram a revitalização do espírito coletivo no curso de computação.
            </div>
          </li>
          <li style={{ '--accent-color': '#FBCA3E' }}>
            <div className="date">2021</div>
            <div className="descr text-white">
              No início, a atlética enfrentou a árdua tarefa de ganhar reconhecimento e apoio. Os membros fundadores investiram tempo e esforço, muitas vezes equilibrando estudos e atividades extracurriculares, para organizar eventos, recrutar novos integrantes e buscar patrocínios. As primeiras competições, embora modestas, foram carregadas de emoção e representaram mais do que um jogo; foram um símbolo de unidade e esforço coletivo.
            </div>
          </li>
          <li style={{ '--accent-color': '#E24A68' }}>
            <div className="date">2022</div>
            <div className="descr text-white">
              Conforme os semestres passavam, a atlética começou a ganhar forma. Os eventos se tornaram mais frequentes e variados, indo além do esporte e abrangendo atividades culturais e sociais. A comunidade universitária, antes indiferente, começou a notar e apoiar a iniciativa. A persistência em criar uma comunidade coesa e solidária começou a dar frutos. As vitórias nas competições não eram apenas dos atletas, mas de todos que acreditavam no projeto e contribuíam de alguma forma.
            </div>
          </li>
          <li style={{ '--accent-color': '#1B5F8C' }}>
            <div className="date">2023</div>
            <div className="descr text-white">
              A cada novo ano, a atlética se reinventava, enfrentando novos desafios com criatividade e determinação. Os eventos se tornaram maiores, as competições mais acirradas e o espírito de camaradagem mais forte. Os líderes da atlética aprenderam a importância da comunicação, da organização e, acima de tudo, da paixão por aquilo que faziam. A atlética não era mais apenas um grupo de esportistas, mas uma família que acolhe novos membros, celebra conquistas e supera adversidades juntas.
            </div>
          </li>
          <li style={{ '--accent-color': '#4CADAD' }}>
            <div className="date">2024</div>
            <div className="descr text-white">
              E assim, semestre após semestre, ano após ano, a atlética se consolidou como um pilar fundamental da vida universitária. Sua persistência em querer fazer uma comunidade foi além dos campos e quadras; foi uma força que unia, inspirava e transformava. É um legado que deixou todos sem palavras, admirados pela capacidade de transformar sonhos em realidade e de construir, tijolo por tijolo, uma verdadeira comunidade de apoio e amizade.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuemSomos;
