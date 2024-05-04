import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import './App.css'; 
import NavBar from './Components/NavBar.jsx';
import CartWidget from './Components/CartWidget.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer props="¡Bienvenidos a nuestra tienda proximamente abriremos!" />
    </div>
  );
}

export default App;
