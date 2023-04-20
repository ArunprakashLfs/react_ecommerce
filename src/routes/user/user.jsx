import Footer from "../../components/footer/footer";
import './user.scss';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    SignOut
} from 'firebase/auth';

const User = ()=>{
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const handlegoogleLogin = (e)=>{
        e.preventDefault();
        console.log(auth);
        signInWithPopup(auth, provider).then((result)=>{
            const user = result.user;
        }).catch((error) => {
            console.log(error);
        })
    }
    return(
        <div >
            {/* <h2>User Page</h2> */}
            <div className="Userpage">
                <div className="userlogin">
                    <button onClick={handlegoogleLogin} className="google"><i class="fa-brands fa-google"></i>Login With Google</button>
                    <button className="signout">Sign Out</button>
                </div>
                <div className="userlogin">
                    <button className="linkedin"><i class="fa-brands fa-github"></i>Login with GitHub</button>
                    <button className="signout">SignOut</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default User;