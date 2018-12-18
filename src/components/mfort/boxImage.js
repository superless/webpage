import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import  { css } from 'emotion'
import Fade from 'react-reveal/Fade'
import {Link} from 'gatsby'

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







const Box = ({ title, id, img, slug }) => (
  <ContaninerBox text={id}>
  
    <Container style={{ flex: 3 }} centrate>
      <Link to={slug}>
      <Img width="79" height="79"
          alt={title}
          src={img}
        />
        </Link>
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
                slug = {map.slug}
              />
            ))}
        </Section>
    )
  }
}



export default SectionImageBoxes
