import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import styled, { css } from 'react-emotion'
import Fade from 'react-reveal/Fade'

import DividerEnd from './backgrounds/end'
import { flex, phone, mobile, rem, theme } from '../../library/utils'

const Wrapper = styled.div`
  position: relative;
  background: white;
  overflow: hidden;
  width: 100%;
  overflow-x: hidden;

  padding-bottom: ${rem(20)};

  ${phone(css`
    padding: ${rem(60)}
  `)}
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: ${rem(20)} 0;

  ${flex}

  ${phone(css`
    padding: 0;
  `)}
`

const PhoneWrapper = styled.div`
  width: ${rem(657)};

  ${mobile(css`
    max-width: ${rem(500)};
  `)}

  ${phone(css`
    max-width: ${rem(300)};
  `)}
`

const Phone = ({ image }) => (
  <PhoneWrapper>
    <GatsbyImg
      style={{
        width: "100%"
      }}
      alt='Mintfort Crypto Phone'
      title='Mintfort Crypto Phone'
      fluid={image.fluid}
    />
  </PhoneWrapper>
)

Phone.propTypes = {
  image: PropTypes.object.isRequired
}

const SectionPhone = ({image}) =>(
      <Wrapper>
        <DividerEnd />
        <ImageWrapper>
          <Fade>
            <Phone image={image}/>
          </Fade>
        </ImageWrapper>
      </Wrapper>
    )


export default SectionPhone
