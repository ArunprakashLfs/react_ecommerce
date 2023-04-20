import { toast, ToastContainer } from "react-toastify";
import Footer from "../../components/footer/footer";
import './user.scss';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from 'firebase/auth';

const User = ()=>{
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const handlegoogleLogin = (e)=>{
        e.preventDefault();
        console.log(auth);
        signInWithPopup(auth, provider).then((result)=>{
            const user = result.user;
            console.log(user);
        }).catch((error)=>{
            console.log(error);
        })
    }
    const handleSignOut = ()=>{
        signOut(auth)
        .then(()=>{
            toast.success("Logout Successfully!");
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return(
        <div >
            {/* <h2>User Page</h2> */}
            <div className="Userpage">
                <div className="userlogin">
                    <button onClick={handlegoogleLogin} className="google"><i class="fa-brands fa-google"></i>Login With Google</button>
                    <button onClick={handleSignOut} className="signout">Sign Out</button>
                </div>
                <div className="userlogin">
                    <button className="linkedin"><i class="fa-brands fa-github"></i>Login with GitHub</button>
                    <button className="signout">SignOut</button>
                </div>
            </div>
            <Footer/>
            <ToastContainer
                    position='top-left'
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='dark'
                />
        </div>
    )
}
export default User;