import { NavLink } from "react-router-dom"
import "./header.css"


const Header = () => {
  return (
    <div className="col-12 row px-5 aling-items-center" id="header">
      <div className=" col-2 headerLogo">fusion +</div>
      <div className="col-10 navbar d-flex justify-content-end">
        <NavLink to="/"  className="navItem">Inicio</NavLink>
        <NavLink to="/nosotros"  className="navItem">Nosotros</NavLink>
        <NavLink to="/servicios"  className="navItem">Servicios</NavLink>
        <NavLink to="/clientes"  className="navItem">Clientes</NavLink>
        <NavLink to="/webinar"  className="navItem">Webinar</NavLink>
        <NavLink to="/contacto"  className="navItem">Contacto</NavLink>
      </div>
    </div> 
  )
}

export default Header