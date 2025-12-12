// import { Component } from "react";

// function Login(){
//     return(
//         <div>
//             <h1>Login User</h1>
//         </div>
//     )   

// }

// //export default Login;//sirf ek he component default export ho skta hai  //default export


// //named export 
// export function Profile(){
//     return(
//         <div>
//             <h1>Profile</h1>
//         </div>
//     )
// }
// //multiple export 
// export function Setting(){
//     return(
//         <div>
//             <h1>Setting</h1>
//         </div>
//     )
// }

// export const UserKey = "@$!%^^!&*!";


//props
// function User({user1}){ 
    
//     return(
//         <div>
//         {/* <h1>User Component props</h1>
//         <h1>Name : {name} </h1>
//         <h1>Age : {age} </h1> */}

//         <h1>User Component props</h1>
//         <h1>Name : {user1.Name} </h1>
//         <h1>Age : {user1.Age} </h1>
//         <h1>Email :{user1.email}</h1>



//         </div>
    
 
//     )

// }


// function Student({name}){

//   return(
//       <div>
//         <h1>Studnet Name : {name}</h1>
//       </div> 
//   )
// }


// function User2({name ="User"}){ //user is default prop 

//   return(
    
//       <div>
//         <h1>Hi , {name}</h1>
//       </div>
    
//   )
// }
// export default User2;


// function Wrapper({children,color="red"}){//defsult red if not passed 

//   return(
    
//       <div style={{color:color, border:"5px solid black",width:"300px",padding :"20px" ,margin:"10px"}}>
//       {children}
        
//       </div>
    
//   )
// }

//checkbox

function Checkbox(){

  return(
      <div>
        <h3>Select your skills</h3>
        <input type="checkbox" id="PHP" value="PHP"/>
        <label htmlFor="PHP">PHP</label><br></br>

        <input type="checkbox" id="HTML" value="HTML"/>
        <label htmlFor="HTML">HTML</label><br>
        </br>

        <input type="checkbox" id="CSS" value="CSS"/>
        <label htmlFor="CSS">CSS</label>
      </div>
  )
}

export default Checkbox;



