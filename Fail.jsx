import { useState } from "react";

function Fail (){

     const[f,setf]=useState();
    fetch('http://localhost/student_managment/Fail.php').
    then (Response=>Response.json()).
    then(json=>{
        console.log(json);
        setf(json)});

    return<>
    <h1>Data</h1>
    <table border={1}>
        <tr>
            <td>RollNo</td>
            <td>Semester</td>
            <td>Marks</td>
        </tr>
    {
        f && f.map((e)=>{
            return <tr>
                <td>{e.rollno}</td>
                <td>{e.semester}</td>
                <td>{e.marks}</td>
                
            </tr>
        })
    }
    </table>
    </>

    
}
export default Fail;
   