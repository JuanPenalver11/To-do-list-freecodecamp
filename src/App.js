import logo from './imagenes/logo-freeCodeCamp.png';
import './App.css';
import ListaDeTareas from './componentes/lista-de-tareas';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={logo}
          alt='logo de FreeCodeCamp'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
       <ListaDeTareas />

      </div>

    </div>
  );
}

export default App;
