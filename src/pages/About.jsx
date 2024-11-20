import {Link} from "react-router-dom"

function About(){
    return(
        <>
            <img className="about-image" src="../src/assets/About-van-image.jpg"/>
            <div className="about-description">
                <h1>Don't squeeze in a sedan when <br />
                    you could relax in a van
                </h1>
                <p>
                    Our mission is to enliven your road trip with the perfect travel <br />
                    van rental. Our vans are recertified before each trip to ensure <br />
                    your travel plans can go off without a hitch. <br />
                    (Hitch costs extra😉)
                </p>
                <p>
                    Our team is full of vanlife enthusiasts who know firsthand the <br />
                    magic of touring the world on 4 wheels
                </p>
                <div className="direct-van-description">
                    <h2>Your destination is waiting. <br />
                        Your van is ready.
                    </h2>
                    <Link to="/van" className="van-button">
                        <span>Explore our vans</span>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default About