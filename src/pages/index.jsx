import React from 'react'
import { graphql } from 'gatsby';
import styled, {keyframes} from 'react-emotion';

import Footer from '../components/Footer';
import Wave from '../elements/Wave'
import Img from 'gatsby-image'

import Hero from '../utilities/Hero';

import {Layout} from './../elements'
import Home from '../components/mfort/home'

import Particles from '../utilities/ParticlesApp';

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
        
          <div className="content">
  <div className="content__container">
    <p className="content__container__text">
      Equilibrio entre:
    </p>
    
    <ul className="content__container__list">
      <li className="content__container__list__item"><font color="purple">aprender</font></li>
      <li className="content__container__list__item"><font color="orange">enseñar</font></li>
      <li className="content__container__list__item"><font color="green">construir</font></li>
      <li className="content__container__list__item"><font color="yellow">innovar</font></li>
    </ul>
    
  </div>
  
</div>
<Particles/>
                </Hero>    
        <Wave />
        <Img alt="equilibrio entre aprender, enseñar, construir e innovar" fluid={data.data.contentfulIndex.frontImage.fluid} />
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