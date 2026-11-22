import { useState } from 'react';
import productosIniciales from './productos.js';
import FiltroCategoria from './FiltroCategoria.jsx';
import ResumenMenu from './ResumenMenu.jsx';

function EjercicioGrupo6() {
  // ESTADO: estos datos sí cambian y React debe recordarlos.
  const [productos, setProductos] = useState(productosIniciales);
  const [categoria, setCategoria] = useState('Todas');

  // ESTADO DERIVADO: se calcula usando el estado existente.
  // No necesita otro useState.
  const productosVisibles =
    categoria === 'Todas'
      ? productos
      : productos.filter((producto) => producto.categoria === categoria);

  const disponibles = productosVisibles.filter(
    (producto) => producto.disponible
  ).length;

  const total = productosVisibles.length;

  function cambiarDisponibilidad(id) {
    setProductos((productosActuales) =>
      productosActuales.map((producto) =>
        producto.id === id
          ? { ...producto, disponible: !producto.disponible }
          : producto
      )
    );
  }

  return (
    <section>
      <h2>Menú con filtro y resumen</h2>

      <FiltroCategoria
        valor={categoria}
        alCambiar={setCategoria}
      />

      <ResumenMenu
        total={total}
        disponibles={disponibles}
      />

      <ul>
        {productosVisibles.map((producto) => (
          <li key={producto.id}>
            <span>
              {producto.nombre} — {producto.categoria} —{' '}
              {producto.disponible ? 'Disponible' : 'No disponible'}
            </span>{' '}

            <button
              type="button"
              onClick={() => cambiarDisponibilidad(producto.id)}
            >
              {producto.disponible
                ? 'Marcar no disponible'
                : 'Marcar disponible'}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EjercicioGrupo6;



