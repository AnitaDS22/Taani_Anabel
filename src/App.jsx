
import "./App.css";
import Button from "./Components/Button";
import { ItemListContainer } from "./Components/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  
  return (
  
    <><div>
      <Navbar />
      <h1 style={{ backgroundColor: "black", color: "white" }}> TAANI </h1>
    
    </div><div>
        <Button texto="Collares" />
        <Button texto="Pulceras" />
        <Button texto="Aros" />
      </div>
      <div> 
        <ItemListContainer greetin="La simplicidad es la clave de la verdadera elegancia"/>
      </div>
      </>

  
  );
};

export default App;
