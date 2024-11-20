import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <h3 className="logo-title">#VANLIFE</h3>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/van">Vans</Link>
            </div>
        </nav>
    )
}