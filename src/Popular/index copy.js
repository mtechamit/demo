import React, { useState } from "react";
import './style.css';

const Popular = ({popularData}) => {
    //console.log(popularData);
    
    //const initalValue=0;
    //const [myNum, setMyNum] = React.useState(initalValue);

    const [myNum, setMyNum] = useState(0)
    const increment = () => setMyNum(myNum + 1)

    console.log(myNum);



    return (
        <div className="popular-wrapper">
            {popularData.map((curElement) => {
        
        const {id,highlightedPrice,offerPrice,image,description,tag,lineThroughPrice,strikePrice}=curElement;
             
                return(
                    <>
                    <div className="popular-card" key={id}>
                        <p className="offerNumber">
                            <span>{highlightedPrice}</span> {offerPrice}
                        </p>
        
                        <div className="offerPrice">
                            <img src={image} width="50" />
                            <div className="strikePrice"><span className="line-through">{lineThroughPrice}</span> <br></br> <span className="bold">{strikePrice}</span></div>
                        </div>
        
                        <p className="desc">{description}</p>

                        <div className="tag bold">{tag}</div>
        
                        <div className="incrementDecrement">
                            <div className="decrement fl-left" onClick={()=> (myNum > 0 ? setMyNum(myNum -1) : setMyNum(0) )}>-</div>
                            <div className="placeValue fl-left">{myNum}</div>
                            <div className="increment fl-left" onClick={increment}>+</div>
        
                        </div>
                   </div>
                   </>
                )
            })}
            
        </div>
    )
}

export default Popular


