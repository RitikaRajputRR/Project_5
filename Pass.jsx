import { useState } from "react";

function Pass (){

     const[p,setp]=useState();
    fetch('http://localhost/student_managment/Pass.php').
    then (Response=>Response.json()).
    then(json=>{
        console.log(json);
        setp(json)});

    return<>
    <h1>Data</h1>
    <table border={1}>
        <tr>
            <td>RollNo</td>
            <td>Semester</td>
            <td>Marks</td>
        </tr>
    {
        p && p.map((e)=>{
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
export default Pass;
   