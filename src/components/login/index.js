'use client'
import { useEffect, useState} from "react"
import instagram from "../../app/images/instagram.png"
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { authorize, signin, setError } from "@/app/store/slices/authSlice"
import { useRouter } from "next/navigation"

export default function UserLogin() {
    const [step, setStep] = useState(1)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const registrationSuccess = useSelector((state) => state.auth.registrationSuccess);

    const router = useRouter()
    const dispatch = useDispatch()

    const error = useSelector ((state) => (state.auth.error))
    useEffect(() => {
        return () => {
        dispatch(setError(null))
        }
    }, [])

        const handleSignin = () => {
            console.log("WOOORKS")
        dispatch(signin({
            email,
            password
        }, router))
        }


    return(
        <section className="signup-page">
            <div className="signup">
                <Image className="logo" src={instagram} alt="logo"/>
                {registrationSuccess && <p className="greenColor">You have successfully registered! Sign in with the email address and password you created.</p>}
                <form className="form">
                    <input className="input" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input className="input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                     <button className="button" onClick={handleSignin} type="button">Login</button>
                     {error && Object.keys(error).map(key => (<p className='error' key={key}>{error[key]}</p>))}
                     <h3>---------------------- OR ----------------------</h3>
                
                     <button className="button-dark">Log in with Facebook</button>
                     <a className="m4">Forgot password?</a>
                </form>
            </div>

            <div className="signup">
                <p>Don't have an account? <Link href="/" className="a-blue">Sign up</Link></p>
            </div>
        </section>
        
    )
}

