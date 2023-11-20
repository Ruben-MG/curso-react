export function TodoCounter({ total, completed, completado }) {
    if (completed < total) {
        return (
            <h2 onChange={completado} id="todosCompleted">
                Completed {completed} of {total}
            </h2>
        );
    } else {
        return (
            <h2 onChange={completado} id="todosCompleted">
                Has completado todas tus tareas!! 🥳🎉
            </h2>)
    }
}

