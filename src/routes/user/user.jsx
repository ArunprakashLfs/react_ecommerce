import { toast, ToastContainer } from "react-toastify";
import Footer from "../../components/footer/footer";
import './user.scss';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slice";
import { removeUser } from "../../redux/slice";
import { addUserWithEmail } from '../../redux/slice'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const User = ()=>{
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    // const email = email;
    // const password = create;
    const registerUser = (e)=>{
        e.preventDefault();
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password, userName)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            dispatch(addUserWithEmail({
                email:user.displayName,
                userName:user.displayName,
                password:user.displayName,
            }))

  })
  .catch((error) => {
   console.log(error);
  });
    }
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
            dispatch(removeUser());
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
                <div className="googlelogin">
                    <button onClick={handlegoogleLogin} className="google"><i class="fa-brands fa-google"></i>Login With Google</button>
                    <button onClick={handleSignOut} className="signout">Sign Out</button>
                </div>
                <div className="userlogin">
                    <form className="form" onSubmit={registerUser} >
                        {/* <button className="linkedin"><i class="fa-brands fa-github"></i>Login with GitHub</button>
                    <button className="signout">SignOut</button> */}
                        <label htmlFor="name">Enter Name</label>
                        <input type="text"  name="name" placeholder="Name" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                        <label htmlFor="email">Enter Email</label>
                        <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="password">Enter password</label>
                        <input type="number" name="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                        <button type="submit" className="signout">Register</button>
                        <p>Already have an account?<span>Login</span></p>
                    </form>
                </div>
            </div>
            <Footer/>
            <ToastContainer
                    position='top-center'
                    // autoClose={2000}
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