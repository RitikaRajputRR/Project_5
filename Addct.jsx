import { useState } from "react";

function ct(){
const[x,setx]=useState();
const[y,sety]=useState();
const[z,setz]=useState();
const[a,seta]=useState();

function CT(){
    console.log("http://localhost/student_managment/Addct.php?r="+x+"&s="+y+"&m="+z);
    fetch("http://localhost/student_managment/Addct.php?r="+x+"&s="+y+"&m="+z).then(res=>res.json()).then(json=>seta(json.result))
}


    return<>
      <div><img src="collage.jpeg" alt="collage" className='w-400 h-80'/></div>
    <br />
    <br />
      <div className="w-140 h-100 ml-130">
    <table>
    <tr><td><b>Rollno:</b></td><td><input type="text"  className="w-100 h-8 rounded-md border-2 ml-10" onChange={(e)=>setx(e.target.value)}/></td></tr>
    <br />
    <tr><td><b>Semester:</b></td><td><input type="text"  className="w-100 h-8 rounded-md border-2 ml-10"  onChange={(e)=>sety(e.target.value)}/></td></tr>
    <br />
    <tr><td><b>Marks:</b></td><td><input type="text"  className="w-100 h-8 rounded-md border-2 ml-10"  onChange={(e)=>setz(e.target.value)}/></td></tr>
    </table>
    <button className="w-50 h-10 bg-green-500 ml-45 rounded-sm text-2xl border-1 mt-5" onClick={CT}>Submit</button>
    </div>
    <h1>{a}</h1>
    </>
}
export default ct;
