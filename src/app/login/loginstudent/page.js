'use client'
import Script from "next/script";

const LoginStudent=()=>{
    return(
        <div>
            <h1 className="heading">Login Page for College</h1>
            <Script src="/location.js" onLoad={()=>{
                console.log('file loaded')
            }}/>
            <h2>Get User getLocation</h2>
        </div>
    )
}

export default LoginStudent;