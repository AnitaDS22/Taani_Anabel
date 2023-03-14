
import Styles from "./navbar.module.scss";



const Navbar = ({icono}) => {
  return (
    <nav className={Styles.container}>
<p>INICIO</p>
<p>PRODUCTOS</p>
<p>NOSOTROS</p>
<p>CONTACTO</p>
<img src="../images/cart.svg" alt="" width="40" height="40"/>


    </nav>
  );
};

export default Navbar