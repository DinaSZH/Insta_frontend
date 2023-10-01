'use client'
import { useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { authorize, signup } from "@/app/store/slices/authSlice"
import instagram from "../../app/images/instagram.png"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/navigation"

export default function UserAuth() {
    const [step, setStep] = useState(1)
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signupUser = () => {
        dispatch(signup(email, username, password))
    }

    const router = useRouter()
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth)

    useEffect(() => {
        if(isAuth){
            router.push("/profile")
        }
    }, [isAuth])

    return(
        <section className="signup-page">
            <div className="signup">
                <Image className="logo" src={instagram}/>
                <h3>Sign up to see photos and videos from your friends.</h3>
                <button className="button-dark">Log in with Facebook</button>
                <h3>OR</h3>
                <form className="form">
                    <input className="input" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input className="input" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <input className="input" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    <span>People who use our service may have uploaded your contact information to Instagram.</span>
        
                    <span>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</span>
                  
                    {!isAuth && <Link href="/signup" >
                     <button className="button" onClick={() => dispatch(authorize())}>Sign up</button>
                        </Link>}
                </form>
            </div>
            <div className="signup">
                <p>Have an account? <Link href="/login" className="a-blue">Login</Link></p>
            </div>
        </section>
    )
}