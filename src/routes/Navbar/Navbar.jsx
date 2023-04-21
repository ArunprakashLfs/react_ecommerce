import { Link } from "react-router-dom";
import './navbar.scss'
import { useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";
import Logo from '../../assets/shopee-logo-40480.png'

const Navbar = () =>{
    const Data = useSelector((state)=>state.nithin.Data);
    const userInfo = useSelector((state)=>state.nithin.userInfo)
    console.log(Data);
    console.log(userInfo);
    return(
        <nav className="navbar-container">
            <div className="brand-container">
                
                <Link to={'/'} className="link">Nithin Traders
                <img className='img-logo' src={Logo} alt="img-logo"/>
                </Link>
            </div>
            <div className="shop-container">
                <Link to={'/shop'} className="link">Shop</Link>
                <Link to={'/user'} className="link">User</Link>
                <Link to={'/cart'} className="link"><BsCart/>{Data.length}</Link>
                {
                    userInfo && <span style={{color:'#fff'}}>{userInfo.name}</span>
                }
            </div> 
        </nav>
    )
}
export default Navbar;