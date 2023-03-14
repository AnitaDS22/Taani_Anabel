
import Styles from "./navbar.module.scss";



const Navbar = ({icono}) => {
  return (
    <nav className={Styles.container}>
 <a href="#" > 
 <img src="../images/logoTaani.jpg" alt="" width="130" height="90"/></a>     
 <a href="#" className="opcion" >INICIO</a> 
 <a href="#" className="opcion">PRODUCTOS</a> 
 <a href="#" className="opcion">NOSOTROS</a> 
 <a href="#" className="opcion">CONTACTO</a> 


<div>
<img src="../images/cart.svg" alt="" width="40" height="40"/>
<p>07</p>
</div>


    </nav>
  );
};

export default Navbar