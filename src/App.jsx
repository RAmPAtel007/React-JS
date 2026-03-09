/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { createLogger } from 'vite';

import { useEffect, useState , useTransition ,useActionState,useId } from "react";
import { useRef } from "react";
import { forwardRef } from "react";

// import './App.css'
//import Header from './header'
//import Counter from './01_counter'
// import User2 from './UserComponent'
//import Student from './UserComponent'
//import Wrapper from './UserComponent';
// import Checkbox from './UserComponent';

// import Login , {Profile ,Setting ,UserKey} from './UserComponent'

// function App() {
//   return (
//     <div>
//     <Header / >
//       <h1>Hello React</h1>
//       <h2>Code With Ram</h2>
      
//       {/* <Fruit /> */}
//       <Login />
//       <Profile />
//       <Setting />
//       <h1>{UserKey}</h1>

//     </div> 
//   )
// }

{/* function Fruit(){
  return(
    <div>
    <p>Hello this is the first component Named as fruit</p>
    </div>
  )
} */}

// function App(){
//   const username = "Ram Patel";
//   return(
//     <div>
//       <h1>Hello {username} </h1>
//       <button onClick={()=>alert("Hello")
//       }>Click</button>
//     </div>
//   )
// } 


//jsx and curly braces..and jo js mein aata hai wooh same he hai 
// function App(){
//   const username = undefined;
//   // let path ="jo bhi link hai wooh yaha";
//   return(
//     <h1>{username?username:"User not found"} </h1>
//     // {/* <img src={path} /> */}

//   )
// } 


//event click and fxn call 

// function callFun(){
//         alert("function called")
//       }
// const fruit=(name)=>{
//   alert(name);
// }
// function App(){
//   return(
//     <div>
//       <h1>Event and function Call</h1>
//       <button onClick={fruit}>Click me </button> 
//       {/* or you can put the whole function defination not the function call */}

//       {/* for parameter */}
//       <button onClick={()=>fruit("banana")}> Banana</button>


//     </div>
//   )
// }

//state and import state or can say hooks 

// function App(){
//   // destructing of js 
//   const [fruit,setFruit] =useState("Apple");   //[state ,update] state and [intial]value 
//   const handleFruit=()=>{
//     setFruit("Banana");
//   }
//   return(
//     <div>
//     <h1>{fruit}</h1>
//     <button onClick={handleFruit}>Change fruit</button>
//     <Counter />
      
//     </div>
//   )

// }


//toggle or hide and show
// function App(){
//   const [display,setdisplay] = useState(true);
//   return(
//     <>
//     <h1>Toggle in react js</h1>


//   {
//     display?<h1>Ram Patel</h1>:null
//   }
//   <button onClick={()=>setdisplay(!display)}>Toggle</button>
    
//   </>
// )
// }

//multiple condtion

// function App(){
//   const[count,setcount] = useState(0);
//   return(
//   <div>
//     <h1>{count}</h1>
//     <button onClick={()=>setcount(count+1)}>Counter</button><br></br>
//     <button onClick={()=>setcount(count-1)}>reverse count</button>
  

//   {
//     count==0?<h1>condition 0</h1>
//     :count==1?<h1>condition 1</h1>
//     :count==2?<h1>condition 2</h1>
//     :count==3?<h1>condition 3</h1>
//     :count==4?<h1>condition 4</h1>
//     :<h1>other condition</h1>
//   }

//   </div>
//   )
// }


//props (parameter jaisa he hai)

// function App(){
//   let userObj={
//         Name:"Ram Patel",
//         Age:"20",
//         email:"ram@gmail.com"
//     }

//     const [student , setStudent] = useState(""); //emtpy wla case 

//   return(
    
//       <div>
//       {/* direct pass */}
//         {/* <User name="Ram Patel" age = {20} /> */}
//        {/* //object pass   */}
//         {/* <User user1={userObj}/> */}
//         {/* <Student name={student} /> */}

//         {/* student mein kuch value ho tabhi dekhe */}
//         { student && <Student name={student} /> }

//         <button onClick={()=>{setStudent("RAM")}}>Click here to make visible the student name </button>
//       </div>
    
//   )
// }


// function App(){

//   return(
    
//       <div>
//         {/* <h1><User2 name="" /></h1>
//         <User2 /> */}

//         <Wrapper color="orange">
//         <h1>Hello Everyone</h1> 
//         <h2 style={{color: 'green'}}>Hello user</h2>

//         </Wrapper>

//         <Wrapper>
//         <h1>Hello admin</h1> 

//         </Wrapper>
        
//       </div>
    
//   )
// }

//control component

// function App(){
//   const [val,setVal] = useState("Ram Patel") //state

//   return(
//       <div>
//         <h1>Get input field</h1>
//         <input value ={val} placeholder='enter the text' type="text" onChange={(event)=>setVal(event.target.value)}></input>

//         {/* event ka jo target hai that is input feild ki value (event.target.value) and setVal ko use kiya hai because jaise jaise change hoga input mein waise show hoga*/}

//         {/* //state ko use kiya hai bhahr display per show krne k liye */}

//         <h1>{val}</h1>
//         <button onClick={()=>setVal("")}>Clear Value</button>

//       </div>
//   )
// }

//handle checkbox

// function App(){
//   return(
//       <div>
//         <h3></h3>
//         <Checkbox />
//       </div>
//   )
// }

// function App(){
//   const [gender ,setGender] = useState('male')
//   const [city , setCity] = useState('indore')

//   return(
//       <div>
//         <h1>Handle radio and dropdown</h1>
//         <h4>Select gender</h4>
//         <input type="radio" onChange={(event)=>setGender(event.target.value)}  name="gender" value={"male"} id="male" checked={gender=="male"}/><label>Male </label><br></br>

//         <input type='radio' onChange={(event)=>setGender(event.target.value)} name="gender" value={"female"} id="female" checked={gender=="female"}/><label>female</label>

//         {/* //checked checkbox mein fill krega  */}

//         <h2>select gender : {gender}</h2>
//         <br></br>

//         {/* //select k liye default value is given by defaultValue attribute */}
//         <select defaultValue={"indore"} onChange={(event)=>setCity(event.target.value)}>
//           <option value="indore">Indore</option>
//           <option value="mhow">Mhow</option>
//         </select>

//         <h2>selected city is : {city}</h2>

//       </div>
//   )
// }

// export default App;


//Loop in jsx with map function 
// function App(){
//   const userName = ['sam' , 'Ram'];
//   const userData = [
//     {
//       Name : 'sam' , 
//       Rollno : 230 

//     }, 
//     {
//       Name: 'ram', 
//       Rollno : 212
//     }
//   ]

//   return(
//       <div>
//         <h1>Loop and Map in jsx</h1>
//         <table border='2'>
//         <thead>
//           <tr>
//             <td>Name</td>
//             <td>RollNo</td>
//           </tr>
//         </thead>

//         <tbody>
//           {
//             userData.map((user)=>(
//           <tr>
//             <td>{user.Name}</td>
//             <td>{user.Rollno}</td>
//           </tr>
//             ))

//           }
//         </tbody>

//         </table>
//       </div>
//   )
// }

// export default App;


//Reuse component in loop 

// import User from "./UserComponent";
// function App(){
//   const userData = [
//     {
//       Name : 'sam' , 
//       Rollno : 230 

//     }, 
//     {
//       Name: 'ram', 
//       Rollno : 212
//     }
//   ]
//   return(
//     <div>
//     <h1>Reuse component in loop</h1>
//     {
//       userData.map((user)=>(
//         <div key={user.Rollno}>
//           <User data={user} />
//         </div>

//       ))
//     }


//     </div>
//   )
// }

// export default App;

//clock
// import Clock from "./UserComponent";
// function App(){
  
//   return(
//     <div>
//     <Clock />
   
//     </div>
//   )
// }

// export default App;


// nested looping 
// import College from "./UserComponent";
// function App() {
//   const collegeData = [
//     {
//       name: "IET Alwer",
//       city: "Alwer",
//       website: "https://www.iet.ac.in/",
//       student: [
//         {
//           name: "Anil sidhu",
//           age: 29,
//           email: "anil@test.com",
//         },
//         {
//           name: "Beter",
//           age: 20,
//           email: "peter@test.com",
//         },
//         {
//           name: "Bruce",
//           age: 25,
//           email: "bruce@test.com",
//         },
//       ],
//     },
//     {
//       name: "IIT Delhi",
//       city: "Delhi",
//       website: "https://www.iit.ac.in/",
//       student: [
//         {
//           name: "Anil sidhu",
//           age: 29,
//           email: "anil@test.com",
//         },
//         {
//           name: "Beter",
//           age: 20,
//           email: "peter@test.com",
//         },
//         {
//           name: "Bruce",
//           age: 25,
//           email: "bruce@test.com",
//         },
//       ],
//     },
//     {
//       name: "KCIET Hisar",
//       city: "Hisar",
//       website: "https://www.kciet.ac.in/",
//       student: [
//         {
//           name: "Anil sidhu",
//           age: 29,
//           email: "anil@test.com",
//         },
//         {
//           name: "Beter",
//           age: 20,
//           email: "peter@test.com",
//         },
//         {
//           name: "Bruce",
//           age: 25,
//           email: "bruce@test.com",
//         },
//       ],
//     },
//   ];



// //outer loop
//  return (
//     <div>
//       <h1>Reuse component in Loop</h1>
//       {collegeData.map((college, index) => (
//         <div key={index}>
//           <College college={college} />
//         </div>
//       ))}
//     </div>
//   );
// }


// export default App;


//Hooks in react 
//1 useState -> yk 
//2 Remove side effect inside component

// Remove side effect from outside component

// Use to fetch data

// Can use as life cycle methods

// Can use for DOM manipulation


// function App(){
//  const [counter , setCounter] = useState(0);
//  const [data , setData] = useState(0);

// //Whenever the button is clicked, the count will increase by 1 and callOnce function will be called again and again.
// //To control this behavior and run the function only once, we can use the useEffect hook.

// //control this side effect
// useEffect(()=>{
//   // callOnce();
//   counterFunction();

// },[counter]) // only click on the counter button the function will work.because you as the counter in the parameter 
// //make the paarameter empty array it will run only once

// //pararmeter handling of the useeffect 


// //call everytime - > do not pass the parameter
// //once call - > pass blank array 
// //single state - > [state1]
// //double state - > [state1,state2]
// //use props - > [prop1 ,prop2]

// function counterFunction() {
//   console.log("counterFunction" ,counter);
// } // Want this function to be called only when counter updates

// function callOnce() {
//   console.log("callOnce function called");
// }


  
//   return(
//     <div>
//     <h1>useEffect Hook</h1>
//     <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
//     <button onClick={()=>setData(data+1)}>Data {data}</button>

   
//     </div>
//   )
// }

// export default App;

// import Counter from "./UserComponent";
// function App(){
  

//   const [count , setCounter] = useState(0);
//   const [data , setData] = useState(0);
//   const [display, setDisplay] = useState(true);
  
//   return(
//     <div>
//     {
//       display ?  <Counter count={count} data= {data}></Counter> : null
//     }
   
//      <button onClick={()=>setCounter(count+1)}>Counter</button>
//      <button onClick={()=>setData(data+1)}>Data</button>
//      <button onClick={()=>setDisplay(!display)}>Toggle</button>


   
//     </div>
//   )
// }

// export default App;



//Css and react 
//inline css updates -> {{}} , "," , camel case 
// function App() {
//   const cardStyle = {
//   border: "1px solid #ccc",
//   width: "200px",
//   boxShadow: "1px 2px 3px 0px #cccccc57",
//   margin: "10px",
// };

// const imageStyle = {
//   width: "200px",
// };

// const textContainerStyle = {
//   padding: "5px",
// };
//   return (
//     <div>
//       <h1 style={{ color: "red" }}>Inline Style in React</h1>
//       <div style={{display:'flex' , flexWrap : 'wrap'}}>
      
//       <div style={cardStyle}>
//         <img
//           style={{ width: "200px" }}
//           src="https://www.w3schools.com/howto/img_avatar.png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <h4>Anil Sidhu</h4>
//           <p>Software Developer</p>
//         </div>


//       </div>

//       <div style={cardStyle}>
//         <img
//           style={{ width: "200px" }}
//           src="https://www.w3schools.com/howto/img_avatar.png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <h4>Anil Sidhu</h4>
//           <p>Software Developer</p>
//         </div>

        
//       </div>
//       <div style={cardStyle}>
//         <img
//           style={{ width: "200px" }}
//           src="https://www.w3schools.com/howto/img_avatar.png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <h4>Anil Sidhu</h4>
//           <p>Software Developer</p>
//         </div>

        
//       </div>
//       <div style={cardStyle}>
//         <img
//           style={{ width: "200px" }}
//           src="https://www.w3schools.com/howto/img_avatar.png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <h4>Anil Sidhu</h4>
//           <p>Software Developer</p>
//         </div>

        
//       </div>
//       <div style={cardStyle}>
//         <img
//           style={{ width: "200px" }}
//           src="https://www.w3schools.com/howto/img_avatar.png"
//           alt=""
//         />
//         <div style={{ padding: "5px" }}>
//           <h4>Anil Sidhu</h4>
//           <p>Software Developer</p>
//         </div>

        
//       </div>
//       </div>
//     </div>
//   );
// }

// export default App;

//Dynamic and conditional lnline style 

// function App() {
//   const [cardStyle, setCardStyle] = useState({
//     border: "1px solid #ccc",
//     width: "200px",
//     boxShadow: "1px 2px 3px 0px #cccccc57",
//     margin: "10px",
//   });

// const [textColor, setTextColor] = useState("red");
// const[grid , setGrid] = useState(true);

// const updateTheme = (bgColor, textColor) => {
//     setCardStyle({ ...cardStyle, backgroundColor: bgColor });
//     setTextColor(textColor);
// };

//   return (
//     <>
//     <h1 style={{ color: "red" }}>Dynamic and conditional lnline style</h1>
//     <button onClick={() => updateTheme("#ccc", "red")}>Grey Theme</button>
//     <button onClick={() => updateTheme("black", "red")}>Default Theme</button>
//     <button onClick={()=>setGrid(!grid)}>Toggle grid</button>
    
//   <div>
      
//     <div style={{display: grid?'flex' : 'block' , flexWrap : 'wrap'}}>
      
//       <div style={cardStyle}>
//         <img
//           style={{ width: "200px" }}
//           src="https://www.w3schools.com/howto/img_avatar.png"
//           alt=""
//         />
//         <div style={{ padding: "5px" , color: textColor}}>
//           <h4>Anil Sidhu</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img
//           style={{ width: "200px" }}
//           src="https://www.w3schools.com/howto/img_avatar.png"
//           alt=""
//         />
//         <div style={{ padding: "5px" , color: textColor}}>
//           <h4>Anil Sidhu</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img
//           style={{ width: "200px" }}
//           src="https://www.w3schools.com/howto/img_avatar.png"
//           alt=""
//         />
//         <div style={{ padding: "5px" , color: textColor}}>
//           <h4>Anil Sidhu</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img
//           style={{ width: "200px" }}
//           src="https://www.w3schools.com/howto/img_avatar.png"
//           alt=""
//         />
//         <div style={{ padding: "5px" , color: textColor}}>
//           <h4>Anil Sidhu</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>

//       <div style={cardStyle}>
//         <img
//           style={{ width: "200px" }}
//           src="https://www.w3schools.com/howto/img_avatar.png"
//           alt=""
//         />
//         <div style={{ padding: "5px" , color: textColor}}>
//           <h4>Anil Sidhu</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>


//     </div>
//   </div>
//   </>
//   );
// }

// export default App;

//external Css

// import "./css/style.css";
// function App(){
  
//   return(
// <>
//       <h1 className="heading">External Style</h1>
//       <div className="container">
//         {/* Repeated cards */}
//         <div className="user-card">
//           <div>
//             <img
//               className="img-style"
//               src="https://www.w3schools.com/howto/img_avatar.png"
//               alt=""
//             />
//             <div className="text-wrap">
//               <h4>Anil Sidhu</h4>
//               <p>Software Developer</p>
//             </div>
//           </div>
//         </div>

//         {/* Copy this div to make more cards */}
//         {/* ...more cards */}
//       </div>
//     </>
//   )
// }

// export default App;

//style with Css modules

// import UserProfile from "./UserComponent";
// function App(){
  
//   return(
//     <UserProfile />
//   )
// }

// export default App;

//Styled components

//npm i styled-component
// import styled from "styled-components"
// function App(){
//   //not working but its should
//   // const Heading = styled.h2`
//   // color:'red';
//   // border:'1px solid green';
//   // borderRadius:'5px';
//   // margin:'20px';
//   // padding:'20px'
//   // `

//   const Heading=styled.h1({
//   color:'red',
//   border:'1px solid green',
//   borderRadius:'5px',
//   margin:'20px',
//   padding:'20px'
// })

// const StyleBtn=styled.button`
// color:red;
// width:130px;
// height:40px;
// margin:20px
// `

//   return(
//     <>
//       <h1>Styled Component with React js</h1>
//       <Heading>Hello Heading </Heading>
//       <StyleBtn>Login</StyleBtn>
//     </>
//   )
// }

// export default App;


//BOOTSTRAP
// import { Button } from 'react-bootstrap';
// import { Alert,Navbar,Container,NavDropdown,Nav } from "react-bootstrap"


// function App(){
  
//   return(
//     <>
//     {/*  */}

//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>



//     {/*  */}
//       <h1>Add Bootstrap in React js </h1>
     
//       <Alert variant="success" >Hello, BT installed</Alert>

//       <Button onClick={()=>alert("Bootstrap Button")}  variant="danger">Bootstrap Button</Button>
//       <Button variant="success">Ok</Button>
//       <Button variant="warning">Ok</Button>
//       <button  onClick={()=>alert("Simple Button")} >Simple Button</button>


//     {/* <h1>Add bootstrap in js</h1>
//     <Button variant="warning">Okay</Button>
//     <Button variant="success">Okay</Button>
//     <Alert variant="danger">BOOTSTRAP is installed </Alert> */}
//     </>
//   )
// }

// export default App;


//useRef HOOK

// function App(){
//   const h1Ref = useRef(null);
//   const inputRef = useRef(null);
//   const inputHandler=()=>{
//     inputRef.current.focus();
//     inputRef.current.style.color = 'red';
//     inputRef.current.placeholder = "enter password";
//     inputRef.current.value=704945;
//   }
  
//   const h1handler=()=>{
    
//       h1Ref.current.style.color = "green";
    
//   }
  
//   return(
//     <>
//     <h1>UseRef</h1>
//     <input ref={inputRef} type="text" placeholder="enter your name" /> 
//     <button onClick={inputHandler}>Focus on the field</button>
//     <h1>do green</h1>
//     <button onClick={h1handler}>make it green </button>
    
//     </>
//   )
// }

// export default App;

//uncontrolled component The form element controls itself — React doesn't track or manage its value directly.


// function App(){

//   const handleForm=(event)=>{
//    event.preventDefault();//page reload nahi hoga submit button per click krne per 
//    const user= document.querySelector("#user").value;
//    const password= document.querySelector("#password").value;

//    console.log(user,password);
   
//   }

//    const userRef=useRef();
//   const passwordRef=useRef();

//   const handleFormRef=(event)=>{
//   event.preventDefault()
//   const user= userRef.current.value
//   const password= passwordRef.current.value

//   console.log("handleFormRef",user,password);

  
//  }

  
 
  
//   return(
//     <>
//     <h1>Uncontrolled Component DOM</h1>
//      <form action="" method="post" onSubmit={handleForm}>
//       <input type="text" id="user" placeholder="enter user name" />
//       <br /><br />
//       <input type="password" id="password" placeholder="enter user password" />
//       <br /><br />
//       <button>
//         Submit
//       </button>

//      </form>

//      <hr />
//      <h1>Uncontrolled Component with useRef</h1>
//      <form action="" method="post" onSubmit={handleFormRef}>
//       <input type="text" ref={userRef} id="userRef" placeholder="enter user name" />
//       <br /><br />
//       <input type="password" ref={passwordRef} id="passwordRef" placeholder="enter user password" />
//       <br /><br />
//       <button>
//         Submit with Ref
//       </button>

//      </form>
    
//     </>
//   )
// }

// export default App;



//PASS FUNCTION IN COMPONENT AS PROPS
// import User from "./UserComponent";
// function App(){
//   const displayName=(name)=>{
//     alert(name);
//   }
//   const getUser=()=>{
//     alert("get user function called")
//   }
  
//   return(
//     <>
//     <User displayName={displayName} name="anil" userkaname={getUser}/>
//     <User displayName={displayName} name="sam" userkaname={getUser}/>
    
//     </>
//   )
// }

// export default App;

//FORWARD REF -> used before react 19 but nowdirect using props.ref 
// import UserInput from "./UserComponent"
// function App(){
//   const inputRef=useRef(null)

//   const updateInput=()=>{
//    inputRef.current.value=1000;
//    inputRef.current.focus();
//    inputRef.current.style.color="red"
    
//   }
  
//   return(
//     <>
//     <h1>Forward Ref</h1>
//       <UserInput ref={inputRef} />
//       <button onClick={updateInput}>Update Input field</button>
//     </>
//   )
// }

// export default App;

//USEFORM STATUS HOOK 
// import {useFormStatus} from 'react-dom'
// function App() {


//   const handleSubmit=async ()=>{
//     await new Promise(res=>setTimeout(res,5000));
//     console.log("submit");
    
//   }

//   function CustomerForm(){
//     const {pending,data,method} =useFormStatus();
//     console.log(pending,data,method);
    
//     return(
//       <div>
//         <input type="text" placeholder="Enter Name" />
//       <br />
//       <br />
//       <input type="text" placeholder="Enter Password" />
//       <br />
//       <br />
//       <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>

//       </div>
//     )
//   }
//   return (
//    <div>
//     <h1>useFormStatus Hook in React js 19</h1>
//     <form action={handleSubmit} method='post'>
//       <CustomerForm />
//     </form>
//    </div>

//   );
// }
//export default App;

//useTRANSITION HOOK use Transition is a React Hook introduced in React 18 as part of the Concurrent Features. It's used to manage transitions, i.e., updates that can be deferred so they don’t block more urgent UI updates like typing or clicking.


// function App(){
//   const[pending, startTransition] = useTransition();

//   const handdleButton=()=>{
//     startTransition(async()=>{
//       await new Promise(res=>setTimeout(res,5000))
//     })
//   }
  
//   return(
//     <>
//     <h1>useTransition Hook in React js 19</h1>
//     <button disabled={pending} onClick={handdleButton}>Click</button>
    
//     </>
//   )
// }
// export default App;

//KEEP YOUR COMPONENT PURE 

//In JavaScript, a pure function is a function that satisfies two key conditions:

// ✅ 1. Deterministic (Same input → Same output)
// Given the same arguments, a pure function always returns the same result.

// ✅ 2. No Side Effects
// A pure function doesn’t change anything outside its scope,

//DERIVED STATE 
// function App() {
//   const [users,setUsers]=useState([]);
//   const [user,setUser]=useState('');
//   const handleAddUsers=()=>{
//     setUsers([...users,user])
//   }
// const total=users.length;
// const last= users[users.length-1];
// const unique= [...new Set(users)].length

//   return (
//     <div>
//     {/* derived sates  */}
//       <h2>Total User : {total} </h2>
//       <h2>Last User : {last}</h2>
//       <h2>Unique Total User : {unique}</h2>

//     <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="add new user" />
//     <button onClick={handleAddUsers} >Add User</button>
//     {
//       users.map((item,index)=>(
//         <h4 key={index}>{item}</h4>
//       ))
//     }
//     </div>

//   );
// }
// export default App;


//LIFTING STATE UP In React, "Lifting State Up" is the process of moving state to the nearest common ancestor of two or more components that need to share or sync that state. check the website for the code bro

// UPDATING OBJECTS IN STATE 
//you have to break the reference and created the new object through the spread operator 

// function App() {

//   const [data, setData] = useState({
//     name: 'Anil',
//     address: {
//       city: 'Delhi',
//       country: 'India'
//     }
//   })

//   const handleName = (val) => {
//     data.name = val

//     setData({ ...data })

//   }
//   const handleCity = (city) => {
//     data.address.city = city;
//     console.log(data);
//     setData({ ...data, address: { ...data.address, city } })


//   }
//   return (
//     <div>
//       <h1>Updating Objects in State</h1>

//       <input type="text" placeholder="update name"
//         onChange={(event) => handleName(event.target.value)} />

//       <input type="text" placeholder="update city"
//         onChange={(event) => handleCity(event.target.value)} />

//       <h2>Name :{data.name}</h2>
//       <h2>City :{data.address.city}</h2>
//       <h2>Country :{data.address.country}</h2>


//     </div>
//   );
// }
// export default App;

//UPDATING ARRAY IN STATE 


// function App(){
//   // const [name, setName] = useState('Ram');

//   //array
//   const [data, setData] = useState([
//     'Ram' , 'Sam' ,'Peter'
//   ])
//   //array and objects 
//   const [dataDetails,setDataDetails]=useState([
//   { name:'anil',age:'29'},
//   { name:'sam',age:'25'},
//   { name:'peter',age:'33'},
// ])


//   const handleUser=(name)=>{

//     //array and object k liye new copyshare krna padte hai update k liye shared the same memory address..so create the new array "..."
//     data[data.length-1] = name ; //last name 
//     console.log(data)
//     setData([...data]) //new array 
//   }


//   const handleAge=(age)=>{
//     dataDetails[dataDetails.length-1].age = age ; //last age 
//     console.log(dataDetails)
//     setDataDetails([...dataDetails]) //new array 
//   }

//   return(
//     <>
//     <h1>Updating Array in State</h1>
//     <input type="text" placeholder="enter last user name " 
//       onChange={(event)=>handleUser(event.target.value)}
//     />
//     {
//       data.map((item, index)=>( //index and key is used for uniqueness ( handle the error in thhe console )
//         <h3 key={index}>{item}</h3>
//       ))
//     }



//     {/* <h2>{name}</h2>
//     <button onClick={()=>setName("Ram PAtel")}>Update Name</button> */}
//     <hr/>
//     <input type="text" placeholder="enter last user age " 
//       onChange={(event)=>handleAge(event.target.value)}
//     />
//     {
//       dataDetails.map((item,index)=>(
//         <h3 key={index} >{item.name} , {item.age}</h3>
//       ))
//     }
    
//     </>
//   )
// }
// export default App;

// useACTIONSTATE HOOK
//The useActionState Hook in React facilitates state updates based on the outcome of an action, particularly useful in scenarios involving form submissions or other server-side operations. This hook is designed to streamline the management of state related to actions, especially when interacting with React Server Components.

// export default function App() {

//   const handleSubmit = async (previousData, formData) => {
//     let name = formData.get('name');
//     let password = formData.get('password');

//     await new Promise(res => setTimeout(res, 2000))
//     // console.log("handleSubmit called",name,password);
//     if (name && password) {
//       return { message: 'Data Submitted', name, password }
//     } else {
//       return { error: 'Failed to Submit. Enter proper data', name, password }
//     }

//   }
//   const [data, action, pending] = useActionState(handleSubmit, undefined)
//   console.log(data);

//   return (
//     <div>
//       <h1>useActionState Hook in React js</h1>
//       <form action={action}>
//         <input defaultValue={data?.name} type="text" placeholder="enter name" name="name" />
//         <br /><br />
//         <input defaultValue={data?.password} type="password" placeholder="enter password" name="password" />
//         <br /><br />
//         <button disabled={pending} >Submit data</button>
//         <br />

//       </form>
//       {
//         data?.error && <span style={{ color: 'red' }}>{data?.error}</span>
//       }
//       {
//         data?.message && <span style={{ color: 'green' }}>{data?.message}</span>
//       }

//       <h3>Name : {data?.name}</h3>
//       <h3>Password : {data?.password}</h3>


//     </div>
//   );
// }

//useID HOOK
// The useId hook in React is a tool for generating unique IDs within a component. It's particularly useful for tasks like associating labels with form inputs or handling dynamic content where unique identifiers are needed. React 18 introduced useId to ensure IDs are consistent across server and client rendering, simplifying accessibility and dynamic UI management.

// export default function App() {
 

// return(
//   <div>
// <UserForm />
// <hr />
// <UserForm />

//   </div>
// )
  
// }


// function UserForm() {
//   const user =useId(); //YOU CAN Create other ids also or also add the prefix to make it unique while using the same id


// return(
//   <div>
//  <form action="">
//   <label htmlFor={user+"name"}>Enter User Name</label>
//   <input id={user+"name"} type="text" placeholder="enter name" />
//   <br /><br />
//   <label htmlFor={user+"password"}>Enter User password</label>
//   <input id={user+"password"} type="text" placeholder="enter password" />
//   <br /><br />
//   <label htmlFor={user+"skills"}>Enter User Skills</label>
//   <input id={user+"skills"} type="text" placeholder="enter skills" />

//   <br /><br />
//   <input id={user+"terms"} type="checkbox" placeholder="enter skills" />
//   <label htmlFor={user+"terms"}>Terms and Condition</label>

//  </form>

//   </div>
// )
  
// }

//FRAGMENT IN REACT JS 
//Fragment is a feature that allows you to group a list of children elements without adding extra nodes to the DOM (Document Object Model).
// toh hota yeah hai ki js return always 1 object and every element is treated as a object that why we wrap a warapper of a div for multiple elements so it create a node in dom..if 100 components then 100 div then use fragment which do not create a node and allows multiple objects or elements at once -> short form <> </>
// import { Fragment } from "react";

// export default function App() {
//   return (
//     <> 
//       <Data />
//       <Data />
//       <Data />
//       <Data />
//       <Data />
//     </>
//   );
// }

// function Data() {
//   return (
//     <Fragment>
//       <h1>Fragment in React js</h1>
//       <h1>Fragment in React js</h1>
//     </Fragment>
//   );
// }



//RULES FOR REACT JS HOOKS
//Start with use_____
  // useState
  // useEffect
  // useRef
  //TOP OF THE COMPONENT

//   export default function App() {
  
//   const [user,setUser] = useState(); //correct
  
  
//   if (condition) {
//     const [data,setData] = useState(); // not correct
//   }
  
  
//   return (
//    <div>
//     <h1>Hook Rules in React js</h1>
//    </div>

//   )

// }
//🔴 Do not call Hooks inside conditions or loops.
// 🔴 Do not call Hooks after a conditional return statement.
// 🔴 Do not call Hooks in event handlers.
// 🔴 Do not call Hooks in class components.
// 🔴 Do not call Hooks inside try/catch/finally blocks.





//MAKE CUSTOM HOOKS 
// import useToggle from "./useToggle";

// function App(){
//   const [value,toggleValue] = useToggle(true);
//   const [data, setData] = useToggle(true);
  
//   return(
//     <>
//     <div>
//       <button onClick={toggleValue}> toggle heading </button>
//       <button onClick={()=>toggleValue(false)}> hide heading </button>
//       <button onClick={()=>toggleValue(true)}> show heading </button>
//     </div>
    
//     {
//       value? <h1>Custom Hooks </h1> : null 
//     }

//     <hr/>
   
//     <button onClick={setData}> toggle heading </button>
//       <button onClick={()=>setData(false)}> hide heading </button>
//       <button onClick={()=>setData(true)}> show heading </button>
//       {
//         data? <h1>second heading</h1> : null
//       }
//     </>
//   )
// }
// export default App;


//CONTEXT API

//create Context : To initiate Context API.
// Provider : use for update or provide data.
// use Context : get data from context api.

// import College from "./contextAPI/College";
// import { SubjectContext } from "./contextAPI/ContextData";
// function App(){
//   const [subject,setSubject]=useState('')
  
//   return(
//     <div style={{backgroundColor:'yellow', padding:10}}>
//     <SubjectContext.Provider value={subject}>

//       <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
//         <option value="">Select Subject</option>
//         <option value="Maths">Maths</option>
//         <option value="History">History</option>
//         <option value="English">English</option>

//       </select>

//       <h1>Context API</h1>
//       <button onClick={()=>setSubject('')} >Clear Subject</button>
//     <College />
//     </SubjectContext.Provider>
    
    
//     </div>
//   )
// }
// export default App;



//REACT ROUTER 7 

import { BrowserRouter, Routes, Route ,Link, NavLink} from "react-router";
import UserList from "./UserList";

// export default function App() {

// return (
// <div>
// <BrowserRouter>
// <NavLink to="/">Home</NavLink>
// <NavLink to="/about">About</NavLink>

// <Routes>
// <Route path="/" element={<h1>Home</h1>} />
// <Route path="/about" element={<h1>About </h1>} />

// </Routes>
// </BrowserRouter>


// </div>
// )

// }

//Routes  - > route components ko pages mein covert kr dega and define the path
// import Home from "./Routes/Home";
// import About from "./Routes/About";
// import Login from "./Routes/Login";
// import Navbar from "./Navbar";
// import Collage from "./Routes/Collage";
// import Student from "./Routes/Student";
// import Department from "./Routes/Department";
// import Details from "./Routes/Detail";
// import PageNotFound from "./Routes/PageNotFound";
// import UserDetail from "./Routes/UserDeail";
// import UserList from "./Routes/UserList";

// export default function App(){
//   return(
    
//     <>
    
//     <BrowserRouter>
//     {/* <Navbar /> */}
    
//       <Routes>

//       <Route element={<Navbar />}>
//           <Route path="/" element={<Home />} />

//           {/* optional segment */}
//           <Route path='/users/list?' element={<UserList />} /> 
//           {/* unable to run this user list dont know  */}
//           <Route path='/users/:id' element={<UserDetail />} />
//       </Route>



//         <Route path="/" element={<Home/>}/>
//         <Route path="/About" element={<About/>}/>
//         <Route path="/Login" element={<Login/>}/>

          
        


//         {/* Prefix route..update the navbar path also to run this 
//         <Route path='in'>
//          <Route path='/in/user'>
//          <Route path="/in/user/login" element={<Login />} />
//          <Route path="/in/user/about" element={<About />} />
//          </Route> */}

//         {/* for nested navigation */}
//         <Route path="/collage" element={<Collage />}>
//         <Route path='student' element={<Student />} />
//         <Route path='department' element={<Department />} />
//         <Route path='detail' element={<Details />} />
//         </Route>




//         {/* 404 handling always in last  */}
//         <Route path="/*" element={<PageNotFound/>} />
//         {/* <Route  path='/*' element={<Navigate  to="/Login" />} /> */}
//       </Routes>
//     </BrowserRouter>

//     </>
//   )
// }


//TAILWIND CSS SETUP

// function App(){
  
//   return(
//     <>
//     Tailwind css setup  
//     <h1 class="text-3xl font-bold underline">
//     Hello world!
//     </h1>
//     </>
//   )
// }
// export default App;


//API

// function App(){
//   const [usersData , setUserData]= useState([]);
//   useEffect(()=>{
//     getUserData();

//   } , [])
//   async function getUserData(){
//     const url = "https://dummyjson.com/users";
//     let response = await fetch(url);
//     response = await response.json()
//     // console.log(response)
//     setUserData(response.users);

      
//     }
//     // console.log(setUserData)
  
//   return(
//     <>
//     <h1>fetch data from user </h1>
//     {
//       usersData && usersData.map((user)=>(
//         <ul>
//           <li>{user.firstName}</li>
//           <li>{user.lastName}</li>
//           <li>{user.age}</li>
//           <hr></hr>

//         </ul>
//       ))
//     }
    
//     </>
//   )
// }
// export default App;

// INTEGRATE JSON SERVER API AND LOADER-> LOader k liye video dekh lo 
// function App(){
//   const [userdata , setUseeData] = useState([]);
//   useEffect(()=>{
//     getUserData();
//   } ,[])

//   const getUserData = async()=>{
//     const url = "http://localhost:3000/users";
//     let response = await fetch(url);
//     response = await response.json();
//     console.log(response);
//     setUseeData(response);
//   }
  
//   return(
//     <>
//     INTEGRATE JSON SERVER API AND LOADER
//     {
//       userdata.map((user)=>(
//         <h1 key={user.id}>{user.name}</h1>
//       ))
//     }
    
//     </>
//   )
// }
// export default App;

//ROUTES AND PAGES FOR USER LIST AND ADD USER UI

// import UserAdd from "./UserAdd";
// import UserEdit from "./UserEdit";

// function App(){
  
//   return(
//     <>
//     <ul className='nav-list'>
//         <li>
//           <NavLink to="/">List</NavLink>
//         </li>
//         <li><NavLink to="/add">Add User</NavLink></li>
//       </ul>
//    {/* <h1>Make Routes and Pages for Add User and User List UI</h1> */}

   
//     <Routes >
//     <Route path="/" element={<UserList />} />
//     <Route path="/add" element={<UserAdd />} />
//     {/* Dynamic routes (with id) */}
//     <Route path="/edit/:id" element={<UserEdit />} />


//   </Routes>
    
//     </>
//   )
// }
// export default App;


//SIMPLE VALIDATION

// function App() {

// const [name,setName]=useState('');
// const [nameErr,setNameErr]=useState(); 

// const [password,setPassword]=useState('');
// const [passErr,setPassErr]=useState(); 

// const handleName=(event)=>{
//   console.log(event.target.value);
//   if(event.target.value.length>5){
//     setNameErr("Please enter valid username. only 5 characters allowed ")
//   }else{
//     setNameErr()
//   }
  
// }

// const handlePassword=(event)=>{
//   let regex= /^[A-Z0-9]+$/i;
//   if(regex.test(event.target.value)){
//     setPassErr()
   
//   }else{
//     setPassErr("Please enter valid password. only numbers and alphabets allowed ")
//   }
  
// }

//   return (
//     <div>
//       <input className={nameErr?'error':''} type="text" onChange={handleName} placeholder='enter name ' />
//       <span className='red-color'>{nameErr && nameErr}</span>
//       <br /><br />
//       <input className={passErr?'error':''} type="text" placeholder='enter password' onChange={handlePassword} />
//       <span className='red-color'>{passErr && passErr}</span>
//       <br /><br />
//       <button disabled={passErr || nameErr} >Login</button>

//     </div>

//   );
// }

// export default App;


//USEACTIONSTATE HOOK 
//const [state, action, isPending] = useActionState(fn, initialState);

//Parameter	Meaning
// fn	->Action function executed when form is submitted
// initialState	->Initial value of the state
// state	->Current state
// action	->Function used in the form action
// isPending	->Boolean that tells if action is running

// function App() {

//   const handleLogin = (prevData, formData) => {
//     let name = formData.get('name')
//     let password = formData.get('password')
//     let regex = /^[A-Z0-9]+$/i;


//     if ( !name || name.length > 5) {
//       return { error: 'Name can not be empty or Name should not container more then 5 characters',name,password }
//     } else if (!regex.test(password)) {
//       return { error: 'Password can  container only numbers and alphabets',name,password }
//     } else {
//       return { message: 'Login done',name,password }
//     }


//   }
//   const [data, action, pending] = useActionState(handleLogin);
//   return (
//     <div>
//       <h1>Validation with useActionState in React</h1>
//       {
//        data?.message && <span style={{color:'green'}} > {data?.message}</span>
//       }
//       {
//        data?.error && <span  style={{color:'red'}}> {data?.error}</span>
//       }
//       <form action={action}>
//         <input defaultValue={data?.name}  type="text" name='name' placeholder='enter user name' />
//         <br /><br />
//         <input type="text" defaultValue={data?.password}  name='password' placeholder='enter user password' />
//         <br /><br />
//         <button  >Login</button>
//       </form>
//     </div>

//   );
// }

// export default App;


//useREDUCER HOOK

//const [state, dispatch] = useReducer(reducer, initialState);

// reducer->	Function that updates state
// initialState >	Starting state value

// state >	Current state
// dispatch	> Function used to trigger state updates

// import { useReducer } from "react";

// const initialState = { count: 0 };

// function reducer(state, action) {

//   switch(action.type){

//     case "increment":
//       return { count: state.count + 1 };

//     case "decrement":
//       return { count: state.count - 1 };

//     case "reset":
//       return initialState;

//     default:
//       return state;
//   }
// }

// export default function Counter(){

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h2>{state.count}</h2>

//       <button onClick={() => dispatch({type:"increment"})}>
//         +
//       </button>

//       <button onClick={() => dispatch({type:"decrement"})}>
//         -
//       </button>

//       <button onClick={() => dispatch({type:"reset"})}>
//         Reset
//       </button>
//     </div>
//   );
// }

//User clicks button
//       ↓
// dispatch(action)
//       ↓
// reducer(state, action)
//       ↓
// returns new state
//       ↓
// React re-renders component


//LAZY LOADING 

// import React, { lazy, Suspense } from "react";

// // Lazy load the component
// // React will load this component only when it is rendered
// const Dashboard = lazy(() => import("./Dashboard"));

// function App() {

//   return (
//     <div>

//       <h1>My Application</h1>

//       {/* Suspense is used to show fallback UI while component loads */}
//       <Suspense fallback={<h2>Loading...</h2>}>

//         {/* Dashboard component will load lazily */}
//         <Dashboard />

//       </Suspense>

//     </div>
//   );
// }

// export default App;


//A Promise is an object that represents a future value that will be available later.

// | `.then()`  | Runs when promise is successful |
// | `.catch()` | Runs when promise fails         |

//FOR READING -----------------
//async is used to define a function that returns a Promise automatically.

//await pauses the function until the Promise is resolved.

//⚠️ It can only be used inside async functions.
//--------------------------

//USE API OR USE HOOK -> Reads Promise inside componentReads Promise inside component


// Import React and Suspense
// import React, { Suspense } from "react";

// // Import the new React hook 'use'
// // This hook allows us to read the value of a Promise directly
// import { use } from "react";


// // Function to fetch data from API
// // fetch() returns a Promise
// const fetchData = () => {

//   // Sending request to API
//   return fetch("https://dummyjson.com/users")

//     // Convert API response into JSON format
//     .then((response) => response.json());
// };


// // Call fetchData() once and store the returned Promise
// // This Promise will later be consumed inside the Users component
// const userResource = fetchData();


// // Main App Component
// export default function App() {

//   return (
//     <div>

//       {/* Page heading */}
//       <h1>Use API in React JS</h1>

//       {/* 
//         Suspense handles loading state automatically.
//         If the data is not ready yet, the fallback UI will be shown.
//       */}
//       <Suspense fallback={<p>Loading...</p>}>

//         {/* 
//           Users component receives the Promise as a prop.
//           When Users tries to read the Promise using use(),
//           Suspense will wait until the Promise resolves.
//         */}
//         <Users userResource={userResource} />

//       </Suspense>

//     </div>
//   );
// }



// // Users Component
// // This component receives the Promise containing user data
// const Users = ({ userResource }) => {

//   /*
//     use() reads the Promise.
//     If the Promise is still pending → Suspense fallback will show.
//     If resolved → actual data will be returned.
//   */
//   const userData = use(userResource);


//   // Print users data in the console for debugging
//   console.log(userData.users);


//   return (
//     <div>

//       {/* Section heading */}
//       <h2>Users List</h2>

//       {
//         /*
//           Loop through the users array using map()
//           and display each user's first name
//         */
//         userData?.users?.map((user) => (

//           // key is required when rendering lists in React
//           <h3 key={user.id}>
//             {user.firstName}
//           </h3>

//         ))
//       }

//     </div>
//   );
// };





//function App(){
  
//   return(
//     <>
    
//     </>
//   )
// }
// export default App;


// new features are remaining go through the website and Keep learning 