/* eslint no-unused-expressions: 0 */

import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Headroom from 'react-headroom';
import Logo from '../icons/Logo';
import { goToAnchor,  configureAnchors }  from 'react-scrollable-anchor'

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  svg {
    height: 2.5rem;
    margin-bottom: 0;
  }
`;

const LogoText = styled.span`
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: 1.25rem;
  margin-left: 0.75rem;
  color: ${props => props.theme.colors.white.base};
  @media (max-width: 500px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.heading};
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.blueish};
    }
    &:focus {
      color: ${props => props.theme.colors.white.base};
    }
  }
`;



class Navigation extends Component {
  componentWillMount() {
    configureAnchors({offset: 300, scrollDuration: 600})
  }
  render() {
    return (
      <Headroom calcHeightOnResize disableInlineStyles>
        <StyledLink to="/">
          <Logo />
          <LogoText>TriFenix</LogoText>
        </StyledLink>
        <Nav>
          
          <Link to="/blog">Blog</Link>
          <Link to="#contact" onClick={()=>goToAnchor("contact")}>Contacto</Link>
        </Nav>
      </Headroom>
    );
  }
}



export default Navigation;




