import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import styled from '@emotion/styled';
import { Wave, Container } from '../elements';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 10rem;
  padding-bottom: 2rem;
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.heading};
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const OptionalContent = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
  h1,
  h2 {
    color: ${props => props.theme.colors.white.light};
    text-align: center;
    margin: 0 auto;
    display: block;
  }
`;

const Content = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${props => props.theme.colors.white.blue};
  a {
    color: ${props => props.theme.colors.white.blue};
    &:hover {
      color: ${props => props.theme.colors.primary.base};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-shadow: ${props => props.theme.shadow.text.small};
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1rem;
    a {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
`;

const EfectoLink = styled.div`
  display: flex;
  max-width: 800px;
  min-width: 300px;
  justify-content: center;
  
  a {
    margin: 0;
    padding-left: 10px;
    }
  img {
    max-width: 48px;
  min-width: 32px;
    &:hover {

      transform: translateY(0px) scale(1.2);
      }
    }
`;

const Important = styled(Item)`
  font-size: 1.2rem;
  text-align: center;
  a {
    color: ${props => props.theme.colors.white.base};
    &:hover {
      color: ${props => props.theme.colors.primary.base};
      transform: scale(2);
    }
  }
`;

const Copyright = styled.div`
  margin: 1rem 0;
  text-align: center;
  color: ${props => props.theme.colors.white.blue};
`;

const Footer = ({ children }) => {
  const date = format(new Date(), 'YYYY');
  return (
    <Wrapper>
      <Wave orientation="top" />
      <Container>
        {children && <OptionalContent>{children}</OptionalContent>}
        <Content>
          <Important>
            <Link to="/blog">Blog</Link>
            
          </Important>
          <Item>
            <Link to="/empresa">¿Quienes Somos?</Link>
          </Item>
          <Item><p>Siguenos y comparte en nuestras redes sociales:</p>
            <EfectoLink>
              <a href="https://www.facebook.com/trifenix.io" target="_blank" rel="noopener noreferrer">
                <img alt="facebook" src="https://www.shareicon.net/download/2015/08/28/92051_facebook.svg"></img>
              </a>
              <a href="https://www.twitter.com/trifenix_io" target="_blank" rel="noopener noreferrer">
                <img alt="twitter"src="https://www.shareicon.net/download/2015/08/28/92028_twitter.svg"></img>
              </a>
              <a href="https://www.instagram.com/trifenix.io/" target="_blank" rel="noopener noreferrer">
                <img alt="instagram" src="https://www.shareicon.net/download/2015/08/28/92044_camera.svg"></img>
              </a>
              <a href="https://github.com/trifenix" target="_blank" rel="noopener noreferrer">
                <img alt="github" src="https://www.shareicon.net/download/2015/08/28/92019_hub.svg"></img>
              </a>
              <a href="https://www.linkedin.com/company/trifenix" target="_blank" rel="noopener noreferrer">
                <img alt="linkedin" src="https://www.shareicon.net/download/2015/08/28/92041_in.svg"></img>
              </a>
              <a href="https://www.youtube.com/channel/UCfMZ12REWKSh-RGYmGhJxkA" target="_blank" rel="noopener noreferrer">
                <img alt="youtube" src="https://www.shareicon.net/download/2015/08/28/92023_video.svg"></img>
              </a>
           </EfectoLink>
          </Item>
        </Content>
        <Copyright>Copyright © {date}. TRIFENIX SpA. Todos los derechos reservados.</Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;

Footer.propTypes = {
  children: PropTypes.any,
};

Footer.defaultProps = {
  children: false,
};
