import Logo from "../../assets/img/Logo 2.png"
import './brand.css'

export default function Brand() {
    return(
        <div>
            <img className='logo' src={Logo} alt='Carrito'></img>
        </div>
    );
}