import React from "react";
const Form = () => {
  return (
    <div>
        <center>
      <h1>Form</h1>
         <table>
         <tr>
          <td>
              <label for="Name" >Name</label>
          </td>
          <td> 
            <input type="text" placeholder="Enter Name"/><br/>
          </td>
         </tr>
          <tr>
            <td>
                <label for="Rno" >Rno</label>
            </td>
           <td>
               <input type="text" placeholder="Enter rno"/><br/>
           </td>
           </tr>
          <tr>
            <td>
              <label for="Birthday">Birthday</label>
            </td>
            <td>
              <input type="date" name="birthday"/><br/>
            </td>
           </tr>
           <tr>
            <td>
              <label for="E-mail">E-mail</label>
            </td>
            <td>
              <input type="text" placeholder="enter e-mail"/><br/>
            </td>
            </tr>
            <tr>
            <td>
                  <label for="Address">Address</label>
            </td>
            <td>
               <input type="text" placeholder='Enter address'/><br/>
            </td>
            </tr>
          <tr>
            <td>
              <label for="E-mail">E-mail</label>
            </td>
            <td>
              <input type="text" placeholder="Enter e-mail"/><br/>
            </td>
          </tr>
          <tr>
            <td>
                <label for="Password">Password</label>
            </td>
            <td>
               <input type="text" placeholder="enter Password"/><br/>
            </td>
          </tr>
          <tr>
             <td>
                Select the Following Courses:
                <div className='Courses'>
                  <input type="checkbox" id="Courses" value="Java"/>  
                  <span>Java</span>
                </div>
                <div>
                  <input type="checkbox" id="Courses" value="Cpp"/>
                  <span>Cpp</span>
                </div>
                <div>
                   <input type="checkbox" id="Courses" value="C"/>
                   <span>C</span>
                </div>
                <div>
                  <input type="checkbox" id="Courses" value="Html"/>
                  <span>Html</span>
                </div>
             </td>
             </tr>
        </table>
          <button>Submit</button>
         
     </center>
    </div>
  )
}

export default Form;