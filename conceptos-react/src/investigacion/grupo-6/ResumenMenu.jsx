function ResumenMenu({ total, disponibles }) {
  return (
    <p>
      <strong>Disponibles: {disponibles} de {total}</strong>
    </p>
  );
}

export default ResumenMenu;
