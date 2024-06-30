// components/CodigoDeConduta.js
import React from 'react';

const CodigoDeConduta = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-xl mb-2 text-white">Documento legível da Associação Atlética Navegadores para seus membros e colaboradores.</p>
      <iframe
        src="https://docs.google.com/viewer?url=https://github.com/aaaccnavegadores/codigo_de_conduta/raw/main/codigo_de_conduta_aaaccn.pdf&embedded=true"
        width="100%"
        height="600px"
        title="Código de Conduta da Associação Atlética Navegadores"
      >
        <p>Seu navegador não suporta visualização de PDFs. Você pode baixar o PDF <a href="https://github.com/aaaccnavegadores/codigo_de_conduta/raw/main/codigo_de_conduta_aaaccn.pdf">aqui</a>.</p>
      </iframe>
    </div>
  );
}

export default CodigoDeConduta;
