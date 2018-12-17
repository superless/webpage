/* eslint max-len: 0 */

import React from 'react';

import { Link, graphql } from 'gatsby';
import styled, {keyframes} from 'react-emotion';
import { Container, Layout } from '../elements';
import Footer from '../components/Footer';
import Wave from '../elements/Wave'
import Img from 'gatsby-image'

import Button from '../components/Button';
import Hero from '../utilities/Hero';


const Text = styled.p`
  text-align: center;
  font-family: ${props => props.theme.fontFamily.heading};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.5rem;
  max-width: 850px;
  margin: 5rem auto;
  text-shadow: ${props => props.theme.shadow.text.big};
`;
const pulse = keyframes`
  0% {
    transform: scale(1);
    animation-timing-function: ease-in;
  }
  25% {
    animation-timing-function: ease-out;
    transform: scale(1.05);
  }
  50% {
    transform: scale(1.12);
    animation-timing-function: ease-in;
  }
  to {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;

const Wrapper = styled.div`
  height: 600px;
  position: relative;
  overflow: hidden;
  .gatsby-image-wrapper {
    height: 600px;
    img {
      animation: ${pulse} 30s infinite;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 500px;
    .gatsby-image-wrapper {
      height: 500px;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 400px;
    .gatsby-image-wrapper {
      height: 400px;
    }
  }
`;

const Index = (data) => { 
  
  return (
    <Layout>
      <Wrapper>
        <Hero>
        <React.Fragment>
        equilibrio entre aprender, construir y enseñar
                </React.Fragment>
        </Hero>
        
        <Wave />
        <Img fluid={data.data.contentfulIndex.frontImage.fluid} />
      </Wrapper>

      
  
      
       
      <Container>
        <Text>
          Ich entwerfe, gestalte und entwickle plattformübergreifende Design-Konzepte, um das volle Potential aus deiner
          Marke herauszuholen. <br />
          <Link to="/projekte">
            <Button type="primary">Projekte</Button>
          </Link>
        </Text>
      </Container>
      <Container>
        
        <Text>
          Mit ebenso viel Leidenschaft schreibe ich über Design- und Coding-Themen und gebe mein Wissen in Form von
          Tutorials weiter. <br />
          <Link to="/blog">
            <Button type="secondary">Blog</Button>
          </Link>
        </Text>
      </Container>
      <Footer />
    </Layout>
  );
}
export const query = graphql`
  query
  {
    contentfulIndex(text : {eq : "index"}){
      frontImage{
           title
          fluid(maxWidth: 900, quality: 85) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          ogimg: resize(width: 1800) {
            src
            width
            height
          }
      }
    }
  }`

export default Index;



