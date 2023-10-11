"use client"
import Link from 'next/link'
import styles from './page.module.css'
import {useRouter} from 'next/navigation'


export default function Home() {
  const router = useRouter();
  const navigate=(name)=>{
    router.push(name)
  }
  console.log(process.env.NODE_ENV)
  return (
    <main>
     <h1>Dynamic Routing</h1>  
     <Link href="/serverproduct" >Go to Server Product List</Link> 
     <br /><br />
     <br />
     <Link href="/productlist" >Go to Product List</Link> 
     <br /><br />
     <br />
     <Link href="/login" >Go to Login Page</Link>
     <br />
     <br />
     <br />
     <Link href="/about" >Go to About Page</Link>
     <br />
     <br />
     <button onClick={()=>navigate("/login")} >Go to Login Page</button>
     <button onClick={()=>navigate("/about")} >Go to About Page</button>


    </main>
  )
}