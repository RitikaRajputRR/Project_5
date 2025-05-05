import { useState } from "react";
import {
    useNavigate
} from "react-router-dom";

function login (){
    const[u,setu]=useState();
    const[p,setp]=useState();
    const navigate = useNavigate();

    function check()
    {

        fetch("http://localhost/student_managment/Login.php?n="+u+"&p="+p).then(res=>res.json()).then(json=>
        {
            console.log(json)
            if(json.result=='save')
            {
                navigate('/Home');
            }
            else{
                alert("invalid username and password please registration");
            }
    
    });
    }

    return<>
    <div><img src="collage.jpeg" alt="collage" className='w-400 h-80'/></div>
    <br />
    <br />
    <br />
    <br />
    <div  className="w-100 h-100 ml-130">
    <table>
    <tr><td><b>Username:</b></td><td><input type="text" onChange={(e)=>setu(e.target.value)} className="w-100 h-8 rounded-md border-2 ml-10" /></td></tr>
    <br />
    <tr><td><b>Password:</b></td><td><input type="text" onChange={(e)=>setp(e.target.value)} className="w-100 h-8 rounded-md border-2 ml-10" /></td></tr> 
    
    </table>
    <br />
    <button  className="w-50 h-10 bg-green-500 ml-50 rounded-sm text-2xl border-1" onClick={check} >ok</button>
    </div>
    </>

}
export default login;