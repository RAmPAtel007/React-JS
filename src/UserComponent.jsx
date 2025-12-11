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


function Student({name}){

  return(
      <div>
        <h1>{name}</h1>
      </div> 
  )
}

export default Student;


