

export default function Van(props){
    const {id, name, price, description, imageUrl, type} = props
    const style = {
        background: type === 'simple' ? '#E17654' : type === 'rugged'? '#115E59' : '#161616'
    };
    return(
        <>
            <div className="display-van">
                <img className="van-image" src={imageUrl} alt = {`van image ${id}`}/>
                <div className="flex-spacebetween">
                    <p className="van-name">{name}</p>
                    <p className="van-price">${price} <br />
                        <span className="normal-weight">/day</span></p>
                </div>
                <p className="van-type" style={style}>{type}</p>
            </div>
        </>
    )
}