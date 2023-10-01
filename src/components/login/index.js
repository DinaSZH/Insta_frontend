'use client'
import { useState} from "react"
import instagram from "../../app/images/instagram.png"
import Image from 'next/image'
import Link from 'next/link'

export default function UserLogin() {
    const [step, setStep] = useState(1)
    return(
        <section className="signup-page">
            <div className="signup">
                <Image className="logo" src={instagram}/>
             
                <h3>OR</h3>
                <form className="form">
                    <input className="input" placeholder="Username or Email"/>
                    <input className="input" placeholder="Password"/>

                     <button className="button">Login</button>
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

