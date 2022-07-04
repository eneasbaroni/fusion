import { NavLink } from "react-router-dom"
import hamburger from "../../assets/hamburger.svg"
import { useEffect, useState } from "react"
import "./header.css"


const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [opacity, setOpacity] = useState(1)


  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)  
      setNavbarOpen(false)   
      setOpacity(1)
    }
    window.addEventListener("resize", handleResize);
    handleResize();  
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const handleClick = () => {
    if (navbarOpen) {
      setOpacity(0)
      setTimeout(() => {
        setNavbarOpen(false)
      }, 300)
    } else {      
      setOpacity(0) 
      setNavbarOpen(true) 
      setTimeout(() => {
        setOpacity(1) 
      }, 1)    
      
    }
  }

  return (
    <div className="col-12 row px-5 aling-items-center" id="header">
      <div className="col-12 col-md-2 text-center text-md-start headerLogo">fusion +</div>
      {windowSize < 577 &&
      <div className="hamburger col-12 row justify-content-center">
        <img className="hamburgerIcon" height={20} src={hamburger} alt="hamburger" onClick={handleClick}/>        
      </div>}
      {navbarOpen === false & windowSize < 577
        ? 
          <></>
        :         
          <div className="col-12 col-md-10 navbar d-flex justify-content-center justify-content-md-end align-items-center" style={{ opacity:opacity }}>
            <NavLink to="/"  className="navItem">Inicio</NavLink>
            <NavLink to="/nosotros"  className="navItem">Nosotros</NavLink>
            <NavLink to="/servicios"  className="navItem">Servicios</NavLink>
            <NavLink to="/clientes"  className="navItem">Clientes</NavLink>
            <NavLink to="/webinar"  className="navItem">Webinar</NavLink>
            <NavLink to="/contacto"  className="navItem">Contacto</NavLink>
          </div>
      }
    </div> 
  )
}

export default Header
