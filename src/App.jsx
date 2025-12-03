import Header from "./components/Header";
import Router from "./components/Router";

/**
 * Main application component that renders the Header and Router components.
 *
 * @component
 * @returns {JSX.Element} The rendered application layout.
 */
function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}
export default App;
