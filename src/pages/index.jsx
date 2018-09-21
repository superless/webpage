import React from 'react'
import { graphql } from 'gatsby';
import styled, {keyframes} from 'react-emotion';

import Footer from '../components/Footer';
import Wave from '../elements/Wave'
import Img from 'gatsby-image'


import Hero from '../utilities/Hero';

import {Layout} from './../elements'
import Home from '../components/mfort/home'

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
const Base = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
`;
const IndexPage = (data) => (
  <Layout>
    <Wrapper>
        <Hero>
        <h1>
            Equilibrio entre <font size="10" color="purple">Aprender</font>, <font size="10" color="#522583">Construir</font> y <font size="10" color="#d85610">Enseñar</font>...
                </h1>
        </Hero>
        
        <Wave />
        <Img fluid={data.data.contentfulIndex.frontImage.fluid} />
      </Wrapper>
      <Home/>
    
    <Footer/>
  </Layout>
)


export const query = graphql`
  query
  {
    contentfulIndex(text : {eq : "index"}){
      frontImage{
           title
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          
      }
    }
  }`

export default IndexPage