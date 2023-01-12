import './navbar.css';
import CartWidget from '../cartWidget/cartWidget';
import Brand from '../Brand/brand'
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className="header">
            <div className="logo">
                <NavLink to="./."> 
                    <Brand />
                    <p className='nombreLogo'>Tomate Tu Tiempo</p>
                </NavLink>
            </div>
            <div className="navbar">
                <ul>
                    <li><NavLink to="./." className="navegacionEnlace">Inicio</NavLink></li>
                    <li><NavLink to="/categoria/Interior" className="navegacionEnlace">Interior</NavLink></li>
                    <li><NavLink to="/categoria/Exterior" className="navegacionEnlace">Exterior</NavLink></li>
                    <li><NavLink to="/categoria/Deco" className="navegacionEnlace">Deco</NavLink></li>
                    <li><NavLink to="/categoria/Macetas" className="navegacionEnlace">Macetas</NavLink></li>
                    <li><NavLink to="/categoria/Contacto" className="navegacionEnlace">Contacto</NavLink></li>
                </ul>
            </div>
            <div>
                <span className='counterProducts'>1</span>
                <Link to="/Cart"> <CartWidget /> </Link>
            </div>
        </header>    
    );
}
