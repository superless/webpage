import React from 'react'
import { graphql } from 'gatsby';
import styled, {keyframes} from 'react-emotion';

import Footer from '../components/Footer';
import Wave from '../elements/Wave'
import Img from 'gatsby-image'


import Hero from '../utilities/Hero';

import Layout from '../elements/Layout'
import Home from '../components/mfort/home'

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

const IndexPage = (data) => (
  <Layout >
    <Wrapper>
        <Hero>
        <React.Fragment>
        equilibrio entre aprender, construir y enseñar
                </React.Fragment>
        </Hero>
        
        <Wave />
        <Img fluid={data.data.contentfulIndex.frontImage.fluid} />
      </Wrapper>
    <Home />
    <Footer/>
  </Layout>
)


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

export default IndexPage