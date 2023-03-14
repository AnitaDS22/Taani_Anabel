
import "./App.css";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  
  return (
  
    <><div>
      <Navbar />
      <h1 style={{ backgroundColor: "violet", color: "white" }}> TAANI </h1>
    
    </div><div>
        <Button texto="Collares" />
        <Button texto="Pulceras" />
        <Button texto="Aros" />
      </div></>

  
  );
};

export default App;
