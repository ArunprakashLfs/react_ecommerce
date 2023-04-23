import { Link } from "react-router-dom";
import './navbar.scss'
import { useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";
import Logo from '../../assets/shopee-logo-40480.png'
import User from '../../assets/logo-genshin-impact-42377.png'
// import slice from "../../redux/slice";

const Navbar = () =>{
    
    const Data = useSelector((state)=>state.nithin.Data);
    const userInfo = useSelector((state)=>state.nithin.userInfo)

    const NavbarView = (userInfo)=>{
        if(!userInfo.name){
            if(userInfo.userName===null){
                let str = userInfo.email
                console.log(str.split("@")[0]);
                return str.split("@")[0];

            }else{
                return userInfo.userName
            }
        }else{
            return userInfo.name
        }
    }
    
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
                {userInfo===null?<Link to={'/user'} className="link">Register</Link>:<Link to={'/login'} className="link">Login</Link>}
                <Link to={'/cart'} className="link"><BsCart/>{Data.length}</Link>
                <div className="img-google">
                {
                    userInfo && <span style={{color:'#fff'}}>{NavbarView(userInfo)}</span>
                }
                <img className='img-logo' src={userInfo?userInfo.image===null?User:userInfo.image:User} alt="logo"/>
                
                </div>
                
            </div> 
        </nav>
    )
}
export default Navbar;