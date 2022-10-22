import './App.css'; 
import CardUser from './components/card/Cards';
import Header from './components/header/Header'; 
import Pie from './components/pie/Pie'; 

function App() {
  return (
    <>
     <div className="App">
     <Header  subtitulo="Miembros"></Header> 
    </div>

    <div className='userSection'>
 <CardUser name = "Luis Francisco" img= "https://react.semantic-ui.com/images/avatar/large/elliot.jpg" descrp= "Ing. en sistemas de informacion."> </CardUser>
 <CardUser name = "Javier Fuentes" img= "https://react.semantic-ui.com/images/avatar/large/daniel.jpg" descrp= "Full-stack developer. Experiencia en HTML, CSS, JavaScript,React, PHP. "> </CardUser>
 <CardUser name = "Julio Millan" img= "https://react.semantic-ui.com/images/avatar/large/matthew.png" descrp= "Lic. en ciencias de la computacion. Encargado de bases de datos en MySQL."> </CardUser>
    </div>

    <div>
     <Pie> Pie de pagina </Pie> 
    </div> 
    </>
  );
}

export default App;
