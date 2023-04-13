import { Link } from "react-router-dom";
import './navbar.scss'

const Navbar = () =>{
    return(
        <nav className="navbar-container">
            <div className="brand-container">
                <Link to={'/'} className="link">Nithin Traders</Link>
            </div>
            <div className="shop-container">
                <Link to={'/shop'} className="link">Shop</Link>
                <Link to={'/user'} className="link">User</Link>
                <Link to={'/cart'} className="link"><FontAwesomeIcon icon="fa-brands fa-opencart" /></Link>
            </div>
        </nav>
    )
}
export default Navbar;