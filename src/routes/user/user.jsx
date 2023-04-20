import { toast, ToastContainer } from "react-toastify";
import Footer from "../../components/footer/footer";
import './user.scss';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slice";
import { removeUser } from "../../redux/slice";
import { useNavigate } from "react-router-dom";

const User = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const handlegoogleLogin = (e)=>{
        e.preventDefault();
        console.log(auth);
        signInWithPopup(auth, provider).then((result)=>{
            const user = result.user;
            // console.log(user);
            dispatch(addUser({
                id: user.uid,
                name: user.displayName,
                email:user.displayName,
                image: user.photoURL,
            })
            );setTimeout(()=>{
                navigate('/')
            },1500)
            
        }).catch((error)=>{
            console.log(error);
        })
    }
    const handleSignOut = ()=>{
        signOut(auth)
        .then(()=>{
            toast.success("Logout Successfully!");
            dispatch(removeUser());
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