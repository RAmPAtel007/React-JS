// import { Link } from "react-router"
// export default function Navbar(){
//     return(
//         <div>
//         <Link to="/"><h1>Home</h1></Link>
//         <Link to="/About"><h1>About</h1></Link>
//         <Link to="/Login"><h1>Login</h1></Link>

//         </div>
        

//     )
// }

//header with react routers 
import { Link } from "react-router";
import './header.css'
export default function NavBar() {
    return <div className="header">
        <div>
            <Link className="link" to={"/"}><h2>Logo</h2></Link>
        </div>
        <div>
            <ul>
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/Login">Login</Link>
                </li>
                <li>
                    <Link className="link" to="/About">About</Link>
                </li>
                <li>
                    <Link className="link" to="/collage">Collage</Link>
                </li>
               
            </ul>
        </div>
    </div>
}