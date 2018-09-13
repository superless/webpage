import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import Fade from 'react-reveal/Fade'

import { Container, Header, Paragraph, Img } from 'library/index'
import { rem, theme, phone } from 'library/utils'

const Background = styled.section`
  ${({ color }) => css`
    background: ${color};
  `}
  ${({ src }) => src && css`
    background: ${src.includes('blue') && theme.blue} url(${require('../' + src)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `}
  padding: ${({ padding }) => padding || '14vh 0'};
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  width: 60%;
  text-align: center;
  ${phone(css`
    width: 85%;
  `)}
  

  ${phone(css`
    width: 85%;
  `)}
  display: flex;
  flex-direction: ${({ col }) => col ? "column" : "row"};

  ${({ size }) => size && size.w && css`
    width: ${size.w};
 `}

  ${({ size }) => size && size.h && css`
    height: ${size.h};
  `}

  ${({ centrate }) => centrate && css`
    align-items: center;
    justify-content: center;
  `}

  ${({ position }) => position && position.x && css`
    justify-content: ${position.x};
  `}

  ${({ position }) => position && position.y && css`
    align-items: ${position.y};
  `}

  ${({ guide }) => guide && process.env.NODE_ENV === 'development' && css`
    border: 1px dashed red;
  `}

`

const Text = ({ title, content, color }) => (
  <Container centrate>
    <Wrapper col>
      <Fade>
        <Header
          style={{ fontWeight: 'bold' }}
        >
          {title}
        </Header>
        <Fade delay={100}>
          {
            typeof content === 'string' ?
              <Paragraph
                color={color && color.paragraph}>
                {content}
              </Paragraph> :
              content
          }
        </Fade>
      </Fade>
    </Wrapper>
  </Container>
)

Text.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  color: PropTypes.object
}

const Image = ({ src }) => (
  <Container centrate style={{ marginTop: rem(40) }}>
    <Wrapper col>
      <Fade delay={200}>
        <Img
          src={require('../' + src)}
          alt="Hero image"
          draggable='false'
        />
      </Fade>
    </Wrapper>
  </Container>
)

Image.propTypes = {
  src: PropTypes.string.isRequired
}

const Section = ({ title, content, background, img, color, padding }) => (
  <Background
    padding={padding}
    src={background}
    color={color && color.background}
  >
    <Text
      title={title}
      content={content}
      color={color}
    />
    {img && <Image src={img} />}
  </Background>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  background: PropTypes.string,
  img: PropTypes.string,
  color: PropTypes.object,
  padding: PropTypes.string
}


export default Section