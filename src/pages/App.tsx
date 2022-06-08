import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';

import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefa';

import style from './App.module.scss';

function App() {
  // criando uma variavel chamada de STATE
  // O state server para que o React observe se uma variavel teve alguma alteração para que poça atualizar a aplicação
  // criando uma função useState que são chamadas de HOOK (tudo do React que tem prefixo 'use')
  // O useState retoerna um array com [0] sendo o estado e [1] sendo a função para mudar o estado
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => 
        tarefasAnteriores.map(tarefa => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true
           }
          }
          return tarefa;
        })
      )
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
