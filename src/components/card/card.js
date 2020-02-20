import React, {useState} from "react";
import {
    Card, CardText, CardBody,
    CardTitle, Badge,  Modal,  ModalBody
  } from 'reactstrap';
  import styled from "styled-components";

const Header = styled(CardTitle)`
  font-size: 3rem;
`
const GoodCard = styled(Card)`
  max-width: 800px;
  margin: auto;
`


 function DayCard(props) {

   
      
        const [modal, setModal] = useState(false);
      
        const toggle = () => setModal(!modal);
    // console.log(props.data)
    return(

       <div>
        <GoodCard>
          <CardBody>
            <Header fontSize='30px'>{props.data.title} <Badge color="warning">{props.data.date}</Badge></Header>

          </CardBody>
          <img width="100%"  src={props.data.url} alt="Card image cap" onClick={toggle}/>
          {/* <CardBody>
            <CardText>{props.data.explanation}</CardText>
          </CardBody> */}
        </GoodCard>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalBody toggle={toggle}>
          {props.data.explanation}   
        </ModalBody>
      </Modal>
      </div> 


     


        // <div>
        //     <Title title ={props.data.title} date ={props.data.date} />
        //     <Image img ={props.data.url} alt={props.data.title}/>
        //     <Explain desc ={props.data.explanation}/>
        // </div>
    )
}


export default DayCard;