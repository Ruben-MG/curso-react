export function CreateTask({ newToDoValue, setNewToDoValue, todos, setTodos }) {
    const estaRepetido = !todos.some(todo => todo.text.toLowerCase() === newToDoValue.toLowerCase())
    const newToDo = (event) => {
        if (estaRepetido) {
            if (newToDoValue !== '') {
                setTodos([...todos, { text: newToDoValue, completed: false }]);
                setNewToDoValue('');
                event.preventDefault();
            }
        } else {
            alert('Esa tarea ya está en uso...\nInténtalo con otra tarea! 😊');
            event.preventDefault();
        }
    }
    return (
        <form>
            <input placeholder="Nuevo ToDo" value={newToDoValue} onChange={(event) => { setNewToDoValue(event.target.value) }}></input>
            <button onClick={newToDo}  >Añadir</button>
        </form>
    )
}