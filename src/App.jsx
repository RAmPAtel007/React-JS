// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { createLogger } from 'vite';

// import { useState } from 'react'
import './App.css'
import Header from './header'
import Counter from './01_counter'
// import User from './UserComponent'
import Student from './UserComponent'

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
//       {/* or ypu can put the whole function defination not the function call */}

//       {/* for parameter */}
//       <button onClick={()=>fruit("banana")}> Banana</button>


//     </div>
//   )
// }

//state and import state or can say hooks 

// function App(){
//   //destructing of js 
//   // const [fruit,setFruit] =useState("Apple");   //state and update state and intial value 
//   // const handleFruit=()=>{
//   //   setFruit("Banana");
//   // }
//   // return(
//   //   <div>
//   //   <h1>{fruit}</h1>
//   //   <button onClick={handleFruit}>Change fruit</button>
//   //   <Counter />
      
//   //   </div>
//   // )

  
// }


//toggle or hide and show
// function App(){
//   const [display,setdisplay] = useState(true);
//   return(
//     <>
    
   
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
function App(){
  let userObj={
        Name:"Ram Patel",
        Age:"20",
        email:"ram@gmail.com"
    }



  return(
    
      <div>
        {/* <User name="Ram Patel" age = {20} /> */}
        <User user1={userObj}/>
        <Student name="sam" />
      </div>
    
  )
}


export default App;

// function App(){

//   return(
    
//       <div>
//         <h1></h1>
//       </div>
    
//   )
// }
