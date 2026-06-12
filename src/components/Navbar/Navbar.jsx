import reactLogo from '../../assets/react.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={reactLogo} alt="logo" className="navbar-logo" />
        <span className="navbar-title">Boilerplate</span>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
  )
}

export default Navbar