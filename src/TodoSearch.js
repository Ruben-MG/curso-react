export function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input placeholder='Buscar' value={searchValue} onChange={(event) => 
      { setSearchValue(event.target.value) }} />
  );
}
