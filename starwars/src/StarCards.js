import React from "react";
import {Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


const StarCard = props => {
    return (




<div className="star-card "key={props.url}>

<Card>
<Card.Content header="Name:" />
    <Card.Content header={props.name} />
    
  
   </Card>
<Card
  header="This person's birthday is:"
  

 description={props.birth} />

<Card
  header="This person's gender is:"
  
 description={props.gender} />

 </div>
  );
};
  
 
  export default StarCard;