import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import Fade from 'react-reveal/Fade'


import { Paragraph, Img, Container, ContaninerBox } from '../../library'
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







const Box = ({ title, id, img }) => (
  <ContaninerBox text={id}>
  
    <Container style={{ flex: 3 }} centrate>
      <Img width="79" height="79"
          alt={title}
          src={img}
        />
    </Container>
    <Container style={{ flex: 1 }} centrate>
      <Fade delay={300}>
        <Paragraph color={theme.blue}>
          {title}
        </Paragraph>
      </Fade>
    </Container>
  </ContaninerBox>
)

Box.propTypes = {
  title: PropTypes.string.isRequired,  
  id: PropTypes.number.isRequired
}

class SectionImageBoxes extends React.Component {
 
  

  render(){
    const { data } = this.props
    
    const dataArray = Object.keys(data).map((k) => data[k])
  
    return (
      <Section>
          {dataArray.map(map => (
              <Box
                key={map.id}
                title={map.title}
                id={map.id}
                img = {map.image}
              />
            ))}
        </Section>
    )
  }
}



export default SectionImageBoxes
