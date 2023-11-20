export function TodoItem(props) {
  return (
    <li className={props.completed.toString()}>
      <span onClick={props.onComplete}>✅</span>
      <p id={props.text}>{props.text}</p>
      <span id="x" onClick={props.onDelete}>❌</span>
    </li>
  );
}
