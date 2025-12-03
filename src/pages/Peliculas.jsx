import { Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";

/**
 * Componente que muestra un listado de películas disponibles.
 *
 * Renderiza un título, una descripción y una cuadrícula de películas.
 * Cada película se muestra como un componente `List` dentro de un enlace (`Link`)
 * que redirige a la página de detalle de la película seleccionada.
 *
 * @component
 * @example
 * return (
 *   <Peliculas />
 * )
 */
function Peliculas() {
  return (
    <>
        <h2 className="text-xl font-semibold mb-4">Listado de películas</h2>
        <p className="text-gray-700 mb-6">
            Estas son los películas disponibles:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
            {peliculas.map((pelicula) => (
                <Link key={pelicula.id} to={`/detalle/pelicula/${pelicula.id}`}>
                    <List
                        // key={pelicula.id}  // No es necesario aquí porque el key está en el Link
                        nombre={pelicula.nombre}
                        foto={pelicula.cartelera}
                    >
                        {pelicula.clasificacion}
                    </List>
                </Link>
                ))
            }
        </div>
    </>
  );
}
export default Peliculas;