import {Link, NavLink} from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="nav">
            <h3 className="logo-title">#VANLIFE</h3>
            <div className="links">
                <NavLink to="/" 
                    className={({isActive})=>isActive ? 'black-underline' : ''}
                >Home</NavLink>
                <NavLink to="/about"
                    className={({isActive})=>isActive ? 'black-underline' : ''}
                >About</NavLink>
                <NavLink to="/van"
                    className={({isActive})=>isActive ? 'black-underline' : ''}
                >Vans</NavLink>
                <NavLink to="/host"
                    className={({isActive})=>isActive ? 'black-underline' : ''}
                >Host</NavLink>
            </div>
        </nav>
    )
}