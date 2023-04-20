import { Link } from "react-router-dom";
import './navbar.scss'
import { useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";
import Logo from '../../assets/shopee-logo-40480.png'

const Navbar = () =>{
    const Data = useSelector((state)=>state.nithin.Data);
    console.log(Data);
    return(
        <nav className="navbar-container">
            <div className="brand-container">
                <img className='img-logo' src={Logo} alt="img-logo"/>
                <Link to={'/'} className="link">Nithin Traders</Link>
            </div>
            <div className="shop-container">
                <Link to={'/shop'} className="link">Shop</Link>
                <Link to={'/user'} className="link">User</Link>
                <Link to={'/cart'} className="link"><BsCart/>{Data.length}</Link>
            </div>
        </nav>
    )
}
export default Navbar;