import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import  { css } from 'emotion'
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby';
import { SubHeader, Img } from '../../library/index'
import { rem, flex, phone, mobile, theme } from '../../library/utils'

const back = {
  1:"#1b243f",
  2: "#1b243f",
  3: "#1b243f",
  4: "#1b243f",
  5: "#96c1e3"
}

const Wrapper = styled.div`
  background: ${({ card }) => card && back[card]};
  margin: ${rem(30)};
  max-width: 600px;
  box-shadow: 0px 6px 10px 0px rgba(27,36,63,0.4);

  ${mobile(css`
    margin: ${rem(10)};
  `)}
`

const Text = styled.div`
  text-align: center;
  min-height: ${rem(130)};
  ${flex}

  ${mobile(css`
    h3 {
      font-size: ${rem(20)};
    }
  `)}

  ${phone(css`
    h3 {
      font-size: ${rem(24)};
    }
  `)}
`
const EfectoLink = styled.div `
    a{
    display: flex;
    max-width: 100%;
    min-width: 100px;
    }
    img {
    display: flex;
    max-width: 100%;
    min-width: 100px;
    -webkit-transition-property: transform; /* Safari */
    -webkit-transition-duration: 10s; /* Safari */
    transition-property: transform;
    transition-duration: 10s;
    &:hover {
      transform: scale(1.8);
      }
    }
`;

export const Card = ({ img, title, card, slug }) => (
  <Wrapper card={card}>
    <EfectoLink>
    <Link to={slug}>
      <Text>
        <Fade>
          <SubHeader
            style={{ margin: 0, padding: '0 30px' }}
            color={card === 20 ? theme.blue : '#fff'}
          >
            {title}
          </SubHeader>
        </Fade>
      </Text>
    
    <Fade delay={200}>
      <Img
        alt={title}
        src={img}
      />
    </Fade>
    </Link>
    </EfectoLink>
  </Wrapper>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  card: PropTypes.number.isRequired
}

export const SectionCards = styled.section`
  ${flex};

  ${phone(css`
    flex-direction: column;
  `)}
`
