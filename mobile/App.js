import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React, { Component } from 'react';

import Routes from './src/routes';

//Todos os elementos do react possuem o estile display flex por padrão
//Não existe erança de estilo entre um compenente pai e um componente filho

export default function App() {
  return (
    <Routes />
  );
}


