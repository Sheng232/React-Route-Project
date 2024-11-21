import {useEffect, useState} from "react"
import Van from "../components/Van"
import {Link} from "react-router-dom"
export default function Vans(){
    const [vanState, setVanState] = useState([]);
    // const [filterState, setFilterState] = useState(
    //     [
    //     {
    //         name: 'Simple',
    //         isClick: false,
    //         color: '#E17654',
    //     }, 
    //     {
    //         name: 'Luxury',
    //         isClick: false,
    //         color: '#115E59',
    //     }, 
    //     {
    //         name: 'Rugged',
    //         isClick: false,
    //         color: '#161616',
            
    //     }]);

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

    // function updateFilter(event){
    //     setFilterState(prevState=>{
    //         return(
    //             prevState.map(button=>{
    //                 const newIsClick = !button.isClick;
    //                 if(event.target.innerText === button.name){
    //                 return(
                        
    //                     {
    //                         ...button,
    //                         isClick: !button.isClick,
    //                         color: newIsClick ? '#FFEAD0' : button.color === '#FFEAD0' ? button.originalColor : button.color,
    //                         originalColor: button.originalColor || button.color, // Preserve the original color
    //                     }
    //                 )}
    //                 else{
    //                     return button
    //                 }

    //             })
    //         )
    //     })
    // }
    // console.log(filterState)

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
            <div className = "van-filter">
                <button>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
                <button className="filter-button"><span className="black-underline">Clear filters</span></button>
            </div>
            <div className = "flex-row">
                {allVans}
            </div>
        </div>
    )
}