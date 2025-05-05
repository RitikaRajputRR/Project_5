import {Link}from "react-router-dom";
function Home(){
    return<>
    <div><img src="collage.jpeg" alt="collage" className='w-400 h-80'/></div>
    <br />
    <div>
        <table className="ml-50">
        <tr>
        <td><Link to="/Addst" className="text-3xl border-2 bg-amber-100 rounded-md">ADD NEW STUDENT</Link></td>
          <td><Link to="/Addct" className="ml-30 text-3xl border-2 bg-blue-100 rounded-md">Add CT</Link></td>
          <td><Link to="/Pass"className="ml-30 text-3xl border-2 bg-green-100 rounded-md ">PASS</Link></td>
          <td><Link to="/Fail"className="ml-30 text-3xl border-2 bg-red-300 rounded-md">FAIL</Link></td>
         <td><Link to="/Logout"className="ml-30  text-3xl border-2  rounded-md">Logout</Link></td>
          </tr>
        </table>
         
    </div>   
    </>
}
export default Home;