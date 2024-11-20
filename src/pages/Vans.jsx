import {useEffect, useState} from "react"
import Van from "../components/Van"
import {Link} from "react-router-dom"
export default function Vans(){
    const [vanState, setVanState] = useState([]);


    useEffect(
        ()=>{
            const fetchData = async () =>{
                try{
                    const res = await fetch("/api/vans");
                    const displayData = await res.json();
                    setVanState(displayData.vans);
                }
                catch{
                console.log("error");
            }
        } 
        fetchData();
},[]);

const allVans = vanState.map(van=>{
    const {id, name, price, description, imageUrl, type} = van
    return(
        <Link className="link" to={`/van/${id}`} key = {id}>
            <Van 
                id = {id}
                name = {name}
                price = {price}
                description = {description}
                imageUrl = {imageUrl}
                type = {type}
            />
        </Link>
    )
});


    return(
        <div className="margin-1rem">
            <h1 className = "title">Explore our van options</h1>
            <div className = "van-filter">{/*the filter goes here */}</div>
            <div className = "flex-row">
                {allVans}
            </div>
        </div>
    )
}