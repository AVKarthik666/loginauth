import React,{useState} from 'react'
import app,{db} from './firebaseconfig'
import firebase from 'firebase/compat/app'

export default function Storedata() {
    const [newValue,setNewValue]=useState("")
    async function send(){
        const response=await db.collection("messsage").add({
            msg:newValue
        })
        console.log(response)
    }
    return (
        <div>
            <input value={newValue} onChange={(e)=>setNewValue(e.target.value)}/>
            <button onClick={send}>Submit</button>
        </div>
    )
}