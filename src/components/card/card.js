import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, Badge
  } from 'reactstrap';
import styled from "styled-components";

function DayCard(props) {
    // console.log(props.data)
    return(

        <div>
        <Card>
          <CardBody>
            <CardTitle fontSize='30px'>{props.data.title} <Badge color="warning">{props.data.date}</Badge></CardTitle>

          </CardBody>
          <img width="100%" src={props.data.url} alt="Card image cap" />
          <CardBody>
            <CardText>{props.data.explanation}</CardText>
          </CardBody>
        </Card>
      </div>


        // <div>
        //     <Title title ={props.data.title} date ={props.data.date} />
        //     <Image img ={props.data.url} alt={props.data.title}/>
        //     <Explain desc ={props.data.explanation}/>
        // </div>
    )
}


export default DayCard;