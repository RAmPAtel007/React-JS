/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { createLogger } from 'vite';

import { useEffect, useState } from "react";

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





// function App(){
  
//   return(
//     <div></div>
//   )
// }

// export default App;

