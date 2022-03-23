import '../Style/NavPage.css'
import logo from '../statics/images/Logo.png'
import icon from '../statics/images/pagina-de-inicio.png'

const Nav = () => {
  return (
    <nav className='nav'>
      <picture className='logo'><img src={logo} /></picture>
      <menu className='nav-links'>
        <a href='#Home'> <img src={icon} alt='icon' /> Inicio</a>
        <a href='#About'>Nosotros</a>
        <a href='#Proyect'>Proyecto</a>
        <a href='#Reviews'>Reseñas</a>
        <a href='#Comic'>Comic</a>
        <a href='#Contact'>Contactenos</a>
      </menu>
    </nav>
  )
}

export default Nav
