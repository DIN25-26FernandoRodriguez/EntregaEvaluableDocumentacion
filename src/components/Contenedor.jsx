import { Outlet } from "react-router-dom";


/**
 * Contenedor component - Main layout wrapper for page content
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.titulo] - Optional title text displayed at the top of the container
 * @returns {React.ReactElement} A main content area with optional heading and nested route content via Outlet
 * 
 * @description
 * Provides a centered, full-height main container with a gradient background.
 * Displays an optional title and renders child routes using React Router's Outlet component.
 * Includes proper semantic HTML and accessibility attributes (role, aria-labelledby, tabIndex).
 */
function Contenedor({ titulo }) {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8"
    >
      <section
        aria-labelledby="main-section-title"
        className="w-full max-w-7xl text-center"
      >
        {titulo && (
          <h1
            id="main-section-title"
            className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]"
          >
            {titulo}
          </h1>
        )}

        {/* {children} */}
        {/* Aquí se muestra el contenido según la ruta */}
        <Outlet />
      </section>
    </main>
  );
}

export default Contenedor;