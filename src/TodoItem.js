// import { Span } from "./Span";
export function TodoItem(props) {
  function toDoReady(){
    var texto = document.getElementById(props.text).parentElement;
    texto.className === 'false' ?  texto.classList = 'true' :  texto.classList = 'false';
}
function borrar() {
  var toDo = document.getElementById(props.text).parentElement;
  console.log(toDo);
  toDo.remove();
}
  return (
    <li className="false">
      <span onClick={toDoReady}>✅</span>
      <p id={props.text} className = 'false'>{props.text}</p>
      <span id="x" onClick={borrar}>❌</span>
    </li>
  );
}
