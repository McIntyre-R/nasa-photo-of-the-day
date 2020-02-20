import React from "react";



function Title(props) {
    // console.log(props)
    return(
        <header>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
        </header>

    )
}

export default Title;