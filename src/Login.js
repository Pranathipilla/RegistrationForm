import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => 
{
      return (
            <div>
             <table>
               <tr><center>
                  <h2><b>Login Page</b></h2>
                  </center>
               </tr>
               <tr>
                  <td>
                  <label Full name><b>Full name</b></label><br></br>
                  </td>
                  <td>
                  <input type="text" id="Name" name="name" placeholder="enter name"></input><br></br>
                  </td>
               </tr>
               <tr>
                  <td>
                  <label Email><b>Email</b></label><br></br>
                  </td>
                  <td>
                  <input type="text" id="Email" name="Email" placeholder="enter email"></input><br></br>
                  </td>
               </tr>
               <tr>
                  <td>
                  <label Password><b>Password</b></label><br></br>
                  </td>
                  <td>
                  <input type="text"  id="password" name="password" placeholder="enter password"></input><br></br>
                  </td>
               </tr>
               <tr>
                  <td>
                  <span class="psw">Forgot <Link>password?</Link></span><br></br>
                  <Link>Create an account?</Link><br></br>
                  </td>
               </tr>
               </table>
                  <button type="button" name="Sign upbtn"><b>Sign up</b></button>
            </div>
            
      )
}
export default Login;
     