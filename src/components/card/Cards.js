import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardUser = (props) => {
    const {name, join, img, descrp} = props;
    return (
  <Card>
    <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{join}</span>
      </Card.Meta>
      <Card.Description>
       {descrp}
      </Card.Description>
    </Card.Content>
    
    <Card.Content extra>
        <a>
            <Icon name = 'user'/>
            22 friends
        </a>
        </Card.Content>
  </Card>
)
    }

export default CardUser