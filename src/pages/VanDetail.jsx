import {useParams, Link} from "react-router-dom"
import {useEffect, useState} from "react"

export default function VanDetail(){
    const [vanState, setVanState] = useState([]);
    const params = useParams();
    

    useEffect(
        ()=>{
            const fetchData = async ()=>{
                try{
                    const res = await fetch(`/api/vans/${params.id}`);
                    const data = await res.json();
                    setVanState(data.vans);
                }
                catch(error){
                    console.log(error)
                }
        }
        fetchData(params.id);
    }, [])
    const {id, name, price, description, imageUrl, type} = vanState;
    const style = {
        background: type === 'simple' ? '#E17654' : type === 'rugged'? '#115E59' : '#161616'
    };
    return(
        <div className="margin-1rem padding-1rem">
            <Link to={`/van`} className="backpage-link">← <span className="black-underline">Back to all vans</span></Link> 
            <div className="flexbox-col">
                <img src={imageUrl} className="van-image"/>
                <div className="flexbox-col-juststart">
                    <p className="van-type" style={style}>{type}</p>
                    <p className="van-name font-1p5rem">{name}</p>
                    <p className="van-price">${price}<span className="normal-weight">/day</span></p>
                    <p>{description}</p>
                    <button className="rent-button">Rent this van</button>
                </div>
            </div>
        </div>
    )
}