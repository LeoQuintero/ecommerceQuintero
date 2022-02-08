import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App container">
      <NavBar />
      <ItemListContainer  
      greeting="Bienvenidos a mi Ecommerce React" 
      />     
     
      
    </div>
  );
}

export default App;
