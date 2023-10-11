'use client'
export default function DeleteUser(props){
    const userId = props.id;
    console.log(userId,"HHH")
    const deleteUser =async()=>{
        let result = await fetch(`http://localhost:3000/backend/${userId}`,{
            method:"delete"
        })
        result = await result.json()
        console.log(result)
    }
    return(
        <div>
            <button onClick={deleteUser}>Delete</button>
        </div>
    )
}