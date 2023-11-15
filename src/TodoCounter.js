export function TodoCounter({total, completed}) {
    return (
        <h2 id="todosCompleted">
            Completed {completed} of {total}
        </h2>
    );
}

