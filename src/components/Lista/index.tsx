import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


function Lista({ tarefas, selecionaTarefa }: Props) { 

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(item => (
          <Item
            selecionaTarefa={selecionaTarefa}
            // prop key é o referencial entre o DOM virtual e o DOM do cliente
            key={item.id}
            {...item} // Objeto item é spread em item.tarefa e item.tempo
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
