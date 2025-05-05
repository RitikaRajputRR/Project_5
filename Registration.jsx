import { useState } from "react";
import {
  useNavigate
} from "react-router-dom";

function Registration(){
      const[a,seta]=useState();
      const[b,setb]=useState();
      const[c,setc]=useState();
      const[d,setd]=useState();
      const[e,sete]=useState();
      const[f,setf]=useState();
      const[g,setg]=useState();
var navigate=useNavigate();
 function Reg(){

    console.log("http://localhost/student_managment/Registration.php?i="+a+"&n="+b+"&m="+c+"&a="+d+"&d="+e+"&p="+f);
    fetch("http://localhost/student_managment/Registration.php?i="+a+"&n="+b+"&m="+c+"&a="+d+"&d="+e+"&p="+f).
    then(res=> res.json()).
    then(json=>{
      
      console.log(json.result)
    if(json.result=='save')
    {
      alert("save");
        navigate('/Login');
    }
    else{
        alert("invalid username and password please registration");
    }

});

 }
 return<>
    <div><img src="collage.jpeg" alt="collage" className='w-400 h-80'/></div>
    <br />
      <div className="w-140 h-100 ml-130">
        <table>
      <tr><td><b>Id:</b></td><td><input type="text" className="w-100 h-8 rounded-md border-2 ml-10" onChange={(e)=>seta(e.target.value)} /></td></tr> 
      <br />
      <tr> <td><b>Name:</b></td><td><input type="text" className="w-100 h-8 rounded-md border-2  ml-10" onChange={(e)=>setb(e.target.value)}  /></td></tr>
      <br />
      <tr> <td> <b>Mobile:</b></td><td><input type="text" className="w-100 h-8 rounded-md border-2  ml-10" onChange={(e)=>setc(e.target.value)}  /></td></tr>
      <br /> 
      <tr> <td><b>Address:</b></td><td><input type="text" className="w-100 h-8 rounded-md border-2  ml-10" onChange={(e)=>setd(e.target.value)}  /></td></tr>
      <br />
      <tr> <td><b>Department:</b></td><td><input type="text" className="w-100 h-8 rounded-md border-2  ml-10" onChange={(e)=>sete(e.target.value)}  /></td></tr>
      <br />
        <tr> <td><b>Password:</b></td><td><input type="text" className="w-100 h-8 rounded-md border-2 ml-10" onChange={(e)=>setf(e.target.value)}  /></td></tr>
        </table>
        <button  className="w-50 h-10 bg-green-500 ml-45 rounded-sm text-2xl border-1 mt-10"onClick={Reg} >ok</button>
        <br />
        <h1>{g}</h1>
    </div>
    
    </>
}
export default Registration;