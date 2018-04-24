import React from 'react'
import { Grid, Segment, Container, Header, Divider } from 'semantic-ui-react'
import ExampleCard from './Card'

import JohnSnow from './../static/Jon-Snow-Noir-680x1208.jpg'
import TheHound from './../static/Hound-Noir.jpg'
import TyrianLanister from './../static/Tyrion-noir.jpg'


class App extends React.Component {
  render() {
    return (
      <Container className='app-container'>
        <Header as='h1'>Game of Thrones React App</Header>
        <Divider />
        <Grid columns='equal'>
          <Grid.Column>
            <ExampleCard name='John Snow' image={JohnSnow} date='2016' friends='250k'>
              Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone
            </ExampleCard>
          </Grid.Column>
          <Grid.Column>
            <ExampleCard name='The Hound' image={TheHound} date='1872' friends='0'>
              Sandor Clegane, nicknamed the Hound, is the younger brother of Ser Gregor Clegane and was the personal bodyguard of Prince Joffrey Baratheon.
            </ExampleCard>
          </Grid.Column>
          <Grid.Column>
            <ExampleCard name='Tyrian Lanister' image={TyrianLanister} date='1900' friends='3'>
              Lord Tyrion Lannister is the youngest child of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces.
            </ExampleCard>
          </Grid.Column>
        </Grid>
        <Divider />
        <Header as='h3'>Art by <a href='https://vladracean.wixsite.com/vladricean/1st-gallery' target="_blank">Ricean Vlad</a></Header>
      </Container>
    )
  }
}

export default App