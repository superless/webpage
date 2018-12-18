import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from 'emotion'
import Fade from 'react-reveal/Fade'
import Waypoint from 'react-waypoint'
import MtSvgLines from 'react-mt-svg-lines'

import { Paragraph, Container, ContaninerBox } from '../../library/index'
import { rem, phone, theme, flex, mobile } from '../../library/utils'

const Section = styled.section`
  padding: ${rem(30)};
  width: 100%;

  ${flex({ x: 'flex-start' })}
  flex-wrap: wrap;

  ${phone(css`
    flex-direction: column;
  `)}
`

const border = '1px solid #EDEDED'



const Icon = ({ component }) => {
  const Component = require('./SVG/icons')[component]
  return <Component />
}

Icon.propTypes = {
  component: PropTypes.string.isRequired
}

const Box = ({ component, title, id, animate }) => (
  <ContaninerBox text={id}>
  
    <Container style={{ flex: 3 }} centrate>
      <MtSvgLines animate={ animate } duration={ 2000 }>
        <Icon component={component}/>
      </MtSvgLines>
    </Container>
    <Container style={{ flex: 1 }} centrate>
      <Fade delay={100}>
        <Paragraph color={theme.blue}>
          {title}
        </Paragraph>
      </Fade>
    </Container>
  </ContaninerBox>
)

Box.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  animate: PropTypes.bool.isRequired
}

class SectionBoxes extends React.Component {
  state = {
    animate: false
  }
  toogleShow = animate => {
    this.setState({ animate })
  }

  render(){
    const { data } = this.props
    const { animate } = this.state
    const dataArray = Object.keys(data).map((k) => data[k])
  
    return (
      <>
       
        <Waypoint
          onEnter={() => this.toogleShow(true)}
        />
        
        <Section>
          {dataArray.map(map => (
              <Box
                animate={animate}
                key={map.id}
                title={map.title}
                component={map.component}
                id={map.id}
              />
            ))}
        </Section>
      </>
    )
  }
}



export default SectionBoxes
