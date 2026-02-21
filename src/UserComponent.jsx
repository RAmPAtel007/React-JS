/* eslint-disable no-unused-vars */
// import { Component } from "react";

import { useEffect, useState , forwardRef} from "react";

// import { useState } from "react";

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

// function Checkbox(){

//   //In React:

//     // onChange fires whenever the checkbox value changes

//     // It gives you access to:

//     // event.target.checked → true / false

//     // event.target.value → checkbox value

//   const [skills,setSkills]=useState([]);
//   const handleSkills=(event)=>{
//     console.log(event.target.value , event.target.checked);
//     if(event.target.checked){
//       setSkills([...skills,event.target.value])//jitne skills the phele se value hai wooh  and jo checked hue hai wooh values show karega
//     }
//     else{
//       setSkills([...skills.filter((item)=>item!=event.target.value)])

//       //Remove the unchecked checkbox value from the skills array and update the state with a new array. //saare value jo select nahi hai usko skills mein rakh lo 
//     }
//   }

//   return(
//       <div>
//         <h3>Select your skills</h3>
//         <input onChange={handleSkills} type="checkbox" id="PHP" value="PHP"/>
//         <label htmlFor="PHP">PHP</label><br></br>
//         {/* //label htmlfor is for onclicking the text the checkbox will work  */}

//         <input onChange={handleSkills} type="checkbox" id="HTML" value="HTML"/>
//         <label htmlFor="HTML">HTML</label><br>
//         </br>

//         <input onChange={handleSkills} type="checkbox" id="CSS" value="CSS"/>
//         <label htmlFor="CSS">CSS</label>

//         <h1>{skills.toString()}</h1>


//       </div>
//   )
// }

// export default Checkbox;


//reuse component in loop
// const User =({data})=>{
//     return(
//         <div style = {{
//             border : "2px solid red",
//             padding : "10px",
//             margin: " 5px"
//         }}>
//         <h3>Name : {data.Name} </h3>
//         <h3>RollNo : {data.Rollno}</h3>
        
//         </div>
        
//     )
// }

// export default User;

//Clock

// const Clock=()=>{
//     const [time,setTime] = useState(0);
//     useEffect(()=>{
//         setInterval(()=>{
//             setTime(new Date().toTimeString())
//         },1000);
//     } ,[])
//     return(
//         <div>
//         {time}
          
//         </div>
//     )

// }
// export default Clock;

//nested looping 

// import Student from "./Student";
// function College({ college }) {
//   return (
//     <div
//       style={{
//         backgroundColor: "#ccc",
//         padding: "20px",
//         margin: "20px",
//         borderBottom: "2px solid #000",
//         borderRadius: "10px",
//       }}
//     >
//       <h1>Name:{college.name}</h1>
//       <ul>
//         <li>
//           <h3>City:{college.city}</h3>
//         </li>
//         <li>
//           <h3>Website:{college.website}</h3>
//         </li>
//         <li>
//           <Student student={college.student} />
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default College;

//parameter handling of the UseEffect 
// const Counter = ({count ,data}) => {

//     const handleCounter = () => {
//     console.log("handleCounter called");
//   };

//   useEffect(() => {
//     handleCounter();
//   }, []); //one time // mounting phase 
   
//   const handleData = () =>{
//     console.log("handledata called");
//   }

//   useEffect(() => {
//     handleData();
//   }, [data]); // everytime for the data button //update phase 

//   //unmounting 
//    useEffect(() => {
//     return()=>{
//         console.log("unmounted")
//     }
//   }, [])
  


//   return (
//     <div>
//       <h1>Counter value {count}</h1>
//       <h2>Data value {data}</h2>
//     </div>
//   );
// };

// export default Counter;

//css -> css modules
// import style from './css/userProfile.module.css';
// function UserProfile(){
//     return(
//         <div>
//         <h1 className={style.heading}>User profile</h1>
//         <div className={style.card}>
//                 <img className={style.img}  src="https://www.w3schools.com/howto/img_avatar.png"></img>
//             <div className={style.textWrap}>
//             <h4>Ram Patel </h4>
//             <p>Learn React with Ram </p>
//             </div>
//         </div>
            
//         </div>
//     )
// }

// export default UserProfile;

//PASS FUNCTION IN COMPONENTS AS PROP 
// function User({displayName , name, userkaname }){
//     return(
//         <div>
//             <button onClick={()=>displayName(name)}> display name</button>
//             <button onClick={()=>userkaname()}> display name</button>
//         </div>

//     )
// }
// export default User;


//FORWARD REF

//old way before react 19 

// const UserInput=(props,ref)=>{
//     return (
//         <>
//             <div>
//                 <input type="text" ref = {ref} />
//             </div>
//         </>
//     )
// }

// export default forwardRef(UserInput);

//new way 
// const UserInput=(props)=>{
//     return(<div>
//         <input type="text" ref={props.ref} />
//     </div>)
// }

// export default UserInput








