import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import { FaChevronDown } from 'react-icons/fa'
import { goToAnchor } from 'react-scrollable-anchor'
import styled, { css } from 'react-emotion'

import StartPageBackground from './backgrounds/pageStart'

import { hover, rem, transitions, navHeight, theme, flex, phone, mobile } from 'library/utils'
import { Container, Title, Header, SubHeader, Button } from 'library/index'

const Wrapper = styled.section`
  height: 100vh;
  padding-top: ${navHeight};
  position: relative;

  display: flex;
  flex-direction: column;

  ${phone(css`
    display: block;
    height: auto;
  `)}
`

const Content = Container.extend`
  padding: ${rem(40)};
  display: flex;
  flex: 1;

  ${phone(css`
    padding: ${rem(30)} ${rem(16)};
    text-align: center;
  `)}
`

const Icon = styled(FaChevronDown)`
  width: ${rem(50)};
  height: ${rem(50)};
  padding: ${rem(8)};
  color: ${theme.blue};
  cursor: pointer;

  ${hover(css`
    transform: scale(1.1)
  `)}

  ${transitions('transform 0.2s ease-in')}
`
const IconWrapper = styled.div`
  position: absolute;
  bottom: ${rem(50)};
  width: 100%;
  ${flex}

  ${phone(css`
    display: none;
  `)}
`

const TextWrapper = styled.div`
  flex: 7;
  padding: ${rem(30)} 0;

  ${mobile(css`
    h1 {
      font-size: ${rem(60)};
    }

    h3 {
      font-size: ${rem(18)};
    }
  `)}

  ${phone(css`
    order: 1;

    h2, h3 {
      font-size: ${rem(16)};
    }
  `)}
`

const ImageWrapper = styled.div`
  flex: 5;
  padding-right: ${rem(40)};
  ${flex({ x: "flex-end", y: 'flex-start' })}
  min-width: 200px;

  ${mobile(css`
    padding: 0;
    flex: 7;
  `)}

  ${phone(css`
    order: 2;
    padding-right: ${rem(40)};
    transform: translate(38px, -20px);

    ${flex({ x: "center", y: 'flex-start' })};
  `)}
`

const StaticImage = styled.div`
  min-width: 600px;
  transform: translateX(-60px) translateY(50px) scale(1.5);

  ${mobile(css`
    transform: translateX(-100px) translateY(50px) scale(1.5);
  `)}

  ${phone(css`
    transform: none;
    min-width: 320px;
  `)}

  transition: all .2s;
`

const Register = Button.extend`
  ${phone(css`
    margin-bottom: ${rem(40)};
  `)}
`

const Sub = SubHeader.extend`
  white-space: pre-line;
  color: ${theme.lightFont};

  ${mobile(css`
    white-space: normal;
  `)}
`

const PortfolioImage = ({ img }) => (
  <StaticImage>
    <GatsbyImg
      fluid={img.childImageSharp.fluid}
      alt="Portfolio tracker"
    />
  </StaticImage>
)

PortfolioImage.propTypes = {
  img: PropTypes.object.isRequired
}

const HomeImage = ({ img }) => (
  <GatsbyImg
    imgStyle={{ width: 340 }}
    fixed={img.childImageSharp.fixed}
    alt="Mintfort application"
  />
)

HomeImage.propTypes = {
  img: PropTypes.object.isRequired
}

const Text = ({ title, subTitle, body, button }) => (
  <TextWrapper>
    <Header
      style={{ margin: `0 0 ${rem(20)}` }}
      color={theme.lightFont}
      size={18}
    >
      {title}
    </Header>
    <Title
      style={{ margin: `0 0 ${rem(20)}` }}
      size={72}
      color="#fff"
    >
      {subTitle}
    </Title>
    <Sub
      style={{ margin: `0 0 ${rem(8)}` }}
      size={18}
    >
      {body}
    </Sub>
    {
      button && button.length &&
      <Register
        primary
        onClick={() => goToAnchor("subscribe")}
      >
        {button}
      </Register>
    }
  </TextWrapper>
)

Text.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  button: PropTypes.string,
  body: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired
}

const Image = ({ img, id }) => (
  <ImageWrapper>
    {id === 'home' ?
      <HomeImage img={img}/> :
      <PortfolioImage img={img}/>
    }
  </ImageWrapper>
)

Image.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired
}


const Hero = ({ title, subTitle, body, img, scrollId, button, id }) => (
  <Wrapper col>
    <StartPageBackground />
    <Content>
      <Image
        id={id}
        img={img}
      />
      <Text
        button={button}
        title={title}
        subTitle={subTitle}
        body={body}
      />
    </Content>
    <IconWrapper>
      <Icon onClick={() => goToAnchor(scrollId)}/>
    </IconWrapper>
  </Wrapper>
)

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  body: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  img: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  scrollId: PropTypes.string,
  button: PropTypes.string
}

export default Hero
