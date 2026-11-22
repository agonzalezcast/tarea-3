function FiltroCategoria({ valor, alCambiar }) {
  return (
    <label>
      Categoría:{' '}
      <select
        value={valor}
        onChange={(evento) => alCambiar(evento.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Bebidas">Bebidas</option>
        <option value="Desayunos">Desayunos</option>
        <option value="Repostería">Repostería</option>
        <option value="Almuerzos">Almuerzos</option>
      </select>
    </label>
  );
}

export default FiltroCategoria;
