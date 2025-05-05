import { useState } from "react";

function Add(){
     const[s,sets]=useState();
     const[t,sett]=useState();
     const[u,setu]=useState();
     const[e,sete]=useState();
     const[n,setn]=useState();
     const[m,setm]=useState();
     const[d,setd]=useState();
     function student(){
     console.log("http://localhost/student_managment/Addst.php?r="+s+"&n="+t+"&b="+u+"&s="+e+"&m="+m+"&e="+n);
       fetch("http://localhost/student_managment/Addst.php?r="+s+"&n="+t+"&b="+u+"&s="+e+"&m="+m+"&e="+n).then(res=>res.json()).than(json=>setd(json.result))
     }

    return<>
      <div><img src="collage.jpeg" alt="collage" className='w-400 h-80'/></div>
    <br />

    <div className="w-140 h-100 ml-130">
    <table>
        <tr>
            <td><b>Rollno:</b></td><td><input type="text"className="w-100 h-8 rounded-md border-2 ml-10"  onChange={(e)=>sets(e.target.nodeValue)}/></td>
        </tr>
        <br />
        <tr>
            <td><b>Name:</b></td><td><input type="text"className="w-100 h-8 rounded-md border-2 ml-10" onChange={(e)=>sett(e.target.nodeValue)}/></td>
        </tr>
        <br />
        <tr>
            <td><b>Branch:</b></td><td><input type="text"className="w-100 h-8 rounded-md border-2 ml-10"onChange={(e)=>setu(e.target.nodeValue)} /></td>
        </tr>
        <br />
        <tr>
            <td><b>Semester:</b></td><td><input type="text"className="w-100 h-8 rounded-md border-2 ml-10" onChange={(e)=>sete(e.target.nodeValue)} /></td>
        </tr>
        <br />
        <tr>
            <td><b>Marks:</b></td><td><input type="text"className="w-100 h-8 rounded-md border-2 ml-10"onChange={(e)=>setm(e.target.nodeValue)} /></td>
        </tr>
        <br />
        <tr>
            <td><b>Email:</b></td><td><input type="text"className="w-100 h-8 rounded-md border-2 ml-10"onChange={(e)=>setn(e.target.nodeValue)} /></td>
        </tr>
    </table>
    <button className="w-50 h-10 bg-green-500 ml-45 rounded-sm text-2xl border-1 mt-5" onClick={student}>Submit</button>
    </div>
    <h1>{d}</h1>
    </>
}
export default Add;