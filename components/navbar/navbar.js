import './navbar.css';
import CartWidget from '../cartWidget/cartWidget';
import Brand from '../Brand/brand'

export default function Header() {
    return(
        <header className="header">
            <div className="logo">
                <a href="index.js">
                    <Brand />
                    <p className='nombreLogo'>Tomate Tu Tiempo</p>
                </a>
            </div>
            <div className="navbar">
                <a href="index.js" className="navegacionEnlace">Inicio</a>
                <a href="index.js" className="navegacionEnlace">Interior</a>
                <a href="index.js" className="navegacionEnlace">Exterior</a>
                <a href="index.js" className="navegacionEnlace">Deco</a>
                <a href="index.js" className="navegacionEnlace">Macetas</a>
                <a href="index.js" className="navegacionEnlace">Contacto</a>
            </div>
            <div>
                <span className='counterProducts'>1</span>
                <CartWidget />
            </div>
        </header>    
    );
}
