import {Link} from "react-router-dom"

function Home(){
    return(
        <>
            <img className="homepage-image" src="../src/assets/homepage-background-img.jpg"/>
            <div className="hero-title">
                <h1>You got the travel plans, we
                    <br />
                    got the travel vans.</h1>
                <p>Add adventure to your life by joining the #VANLIFE movement.
                <br />
                    Rent the perfect van to make your perfect road trip.
                </p>
                <Link className="hero-button" to="/van">
                    <span>Find Your Van</span>
                </Link>
            </div>  
        </>
    )
}

export default Home