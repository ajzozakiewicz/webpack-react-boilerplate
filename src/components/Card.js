import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = ({ name, image, date, friends, children}) => {
  console.log(image)
  return (
  <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined {date}
        </span>
      </Card.Meta>
      <Card.Description>
        {children}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {friends} Friends
      </a>
    </Card.Content>
  </Card>
)
}

export default CardExampleCard