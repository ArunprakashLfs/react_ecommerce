import { toast, ToastContainer } from "react-toastify";
import Footer from "../footer/footer";
import '../../routes/user/user.scss';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    // createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slice";
import { removeUser } from "../../redux/slice";
import { signinWithEmail } from '../../redux/slice'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ()=>{
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    // const email = email;
    // const password = create;
    const LoginUser = (e)=>{
        e.preventDefault();
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            toast.success("login successful");
            console.log(user);
            dispatch(signinWithEmail({
                email:user.email,
                userName:user.displayName,
                password:user.displayName,
            }));
            setTimeout(() => {
                navigate('/')
            }, 1500);

  })
  .catch((error) => {
   console.log(error);
   toast.error("oops some error")
  });
    }
    const handlegoogleLogin = (e)=>{
        e.preventDefault();
        console.log(auth);
        signInWithPopup(auth, provider).then((result)=>{
            const user = result.user;
            toast.success("Login with Google Successfully")
            // console.log(user);
            dispatch(addUser({
                id: user.uid,
                name: user.displayName,
                email:user.displayName,
                image: user.photoURL,
            })
            );setTimeout(()=>{
                navigate('/')
            },5000)
            
        }).catch((error)=>{
            console.log(error);
            toast.error("oops some error ")
        })
    }
    const handleSignOut = ()=>{
        signOut(auth)
        .then(()=>{
            dispatch(removeUser());
            toast.success("Logout Successfully!");
            setTimeout(() => {
                navigate('/')
            }, 1000);
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
                    <form className="form" onSubmit={LoginUser} >
                        {/* <button className="linkedin"><i class="fa-brands fa-github"></i>Login with GitHub</button>
                    <button className="signout">SignOut</button> */}
                        <h2>Login</h2>
                        <label htmlFor="name">Enter Name</label>
                        {/* <input type="text"  name="name" placeholder="Name" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                        <label htmlFor="email">Enter Email</label> */}
                        <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="password">Enter password</label>
                        <input type="number" name="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                        <button type="submit" className="signout">Login</button>
                        <button className="signin" onClick={handleSignOut}>SignOut</button>
                        <p>Don't have an account?<span onClick={()=>{navigate('/user')}}>signup</span></p>
                        
                        
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
export default Login;