import React from "react";



function Image(props) {
    // console.log(props)
    return(
        <div>
        <img src={props.img} alt={props.alt}/>
        </div>

    )
}

export default Image;