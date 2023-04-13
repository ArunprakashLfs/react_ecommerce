import { Link } from "react-router-dom";
import './navbar.scss'

const Navbar = () =>{
    return(
        <nav className="navbar-container">
            <div className="brand-container">
                <Link to={'/'} className="link">Nithin Traders</Link>
            </div>
            <div className="shop-container">
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/user'}>User</Link>
                <Link to={'/cart'}></Link>
            </div>
        </nav>
    )
}
export default Navbar;