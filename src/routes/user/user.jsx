import Footer from "../../components/footer/footer";
import './user.scss'

const User = ()=>{
    return(
        <div >
            {/* <h2>User Page</h2> */}
            <div className="Userpage">
                <div className="userlogin">
                    <button className="google"><i class="fa-brands fa-google"></i>Login With Google</button>
                    <button className="signout">Sign Out</button>
                </div>
                <div className="userlogin">
                    <button className="linkedin"><i class="fa-brands fa-linkedin-in"></i>Login with LinkedIn</button>
                    <button className="signout">SignOut</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default User;