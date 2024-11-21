import {Outlet, Link} from "react-router-dom"

export default function HostLayout(){
    return(

        <>
            <nav className="navbar">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/Income">Income</Link>
                <Link to="/host/Hostvan">Vans</Link>
                <Link to="/host/Reviews">Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}