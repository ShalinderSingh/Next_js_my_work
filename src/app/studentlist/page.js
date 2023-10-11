import Link from "next/link";

export default function StudentList(){
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li> 
                    <Link href="/studentlist/ali" >Ali</Link>
                </li>
                <li> 
                <Link href="/studentlist/amrinder" >Amrinder</Link>
                </li>
                <li> 
                <Link href="/studentlist/sippy" >Sippy</Link>
                </li>
                <li> 
                <Link href="/studentlist/harry" >Harry</Link>
                </li>
            </ul>
        </div>
    )
}