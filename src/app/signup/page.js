'use client'
import { useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import {signup, setError } from "@/app/store/slices/authSlice"
import instagram from "../../app/images/instagram.png"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/navigation"


export default function Signup() {
  const [step, setStep] = useState(1)
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [bio, setBio] = useState("");
    const [user_image, setUserImage] = useState("");
    
    const router = useRouter()
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth)

    const error = useSelector ((state) => (state.auth.error))

    useEffect(() => {
      return () => {
        dispatch(setError(null))
      }
    }, [])

    const onImageChange = (e) => {
      setUserImage(e.target.files[0])
    }

    const signupUser = () => {
        dispatch(signup(
          {email, username, password,
          password2, bio, user_image }, router))
    }


    return(
      <main>
        <section className="signup-page">
            <div className="signup">
                <Image className="logo" src={instagram} alt="logo"/>
                <h3>Sign up to see photos and videos from your friends.</h3>
                <button className="button-dark">Sign up with Facebook</button>
                <h3>OR</h3>
                  <form className="form">
                    <input className="input" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input className="input" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <input className="input" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <input className="input" placeholder="Enter Confirm Password" value={password2} onChange={(e)=>setPassword2(e.target.value)}/>
                    <input className="input" placeholder="Enter bio information" value={bio} onChange={(e)=>setBio(e.target.value)}/>
                    <input className="input" type='file' placeholder="Upload profile photo" onChange={onImageChange}/>
                    {error && Object.keys(error).map(key => (<p key={key} className='error'>{error[key]}</p>))}
                    <span>People who use our service may have uploaded your contact information to Instagram.</span>
        
                    <span>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</span>
                  
                    {!isAuth &&
                      <button className="button-dark" onClick={signupUser} type="button">Sign up</button>}
                </form>

                

            </div>
            <div className="signup">
                <p>Have an account? <Link href="/login" className="a-blue">Login</Link></p>
            </div>
        </section>
        </main>
    )
}
