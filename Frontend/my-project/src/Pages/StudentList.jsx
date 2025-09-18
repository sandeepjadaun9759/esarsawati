import React, { useEffect } from 'react'
import {getDatabase,onValue, ref} from 'firebase/database'
import { app } from "../Firebase.js";


const StudentList = () => {
    useEffect(()=>{
        const db = getDatabase(app)
        const studentRef=ref(db,'/A/2021/student')
        onValue(studentRef,(snapshot)=>{
            const data = snapshot.val()
            console.log(data);
        })
        
    },[])
  return (
    <div>StudentList</div>
  )
}

export default StudentList