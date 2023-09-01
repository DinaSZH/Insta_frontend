'use client'
import { useState} from "react"
import instagram from "../../app/images/instagram.png"
import Image from 'next/image'

export default function UserSignUp() {
    const [step, setStep] = useState(1)

    return(
        <section className="signup-page">
            <div className="signup">
                <Image className="logo" src={instagram}/>
                <h3>Sign up to see photos and videos from your friends.</h3>
                <button className="facebook-button">Log in with Facebook</button>
                <h3>OR</h3>
                <form className="form">
                    <input className="input" placeholder="Email"/>
                    <input className="input" placeholder="Username"/>
                    <input className="input" placeholder="Password"/>

                    <span>People who use our service may have uploaded your contact information to Instagram.</span>
        
                    <span>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</span>
                    <button className="button">Sign up</button>
                </form>
            </div>
        </section>
    )
}