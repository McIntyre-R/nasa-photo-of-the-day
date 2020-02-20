import React from "react";
import Title from './title';
import Image from './image';
import Explain from './explain';

function Card(props) {
    // console.log(props.data)
    return(
        <div>
            <Title title ={props.data.title} date ={props.data.date} />
            <Image img ={props.data.url} alt={props.data.title}/>
            <Explain desc ={props.data.explanation}/>
        </div>
    )
}


export default Card;