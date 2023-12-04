import { FaCheck } from "react-icons/fa";
 
export function TodoItem(props) {
  return (
    <li className={props.completed.toString()}>
      <span onClick={props.onComplete} className="check"><FaCheck/></span>
      <p id={props.text}>{props.text}</p>
      <span id="x" onClick={props.onDelete}>❌</span>
    </li>
  );
}
