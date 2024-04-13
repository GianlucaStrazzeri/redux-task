import { useEffect } from "react";//hook (gancho) de react que permite realizar efectos secundarios en componentes funcionales
import { useSelector } from "react-redux";
//Hook que extrae datos del store (Redux) en componentes (React). Selecciona datos del estado global (Redux) y  te suscribe a los cambios de esos datos, actualiza automáticamente los componentes si el estado de Redux cambia.
import {useDispatch} from "react-redux"; //función que envia acciones (actions) al store de Redux. Cuando cambias de estado al app en Redux, lo haces envíando una acción al store. dispatch envía esas acciones.

export function App  ()  {
  const dispatch useDispatch()

  useEffect(()=>{

  },[])
  const task=useSelector((state=>state.task)) //esto viene del name:"task" de linea 15 de todosSlice.js
  return (
    <>
    <h1>Tarea</h1>
    <ul>
    <li>nombre de la tarea: {task.taskName}</li>
    <li>Descripción: {task.taskDescription}</li>
<li>completed: {task.completed}</li>
    </ul>
    </>
  );
};

//export default App;
