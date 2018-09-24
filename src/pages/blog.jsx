import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled , {keyframes}from 'react-emotion';
import { Container, Layout } from '../elements';
import ScrollableAnchor from 'react-scrollable-anchor'
import ItemBlog from '../components/ItemBlog';
import Footer from '../components/Footer';
import Subscribe from '../components/mfort/formRegister'
import Wave from '../elements/Wave'
import Img from 'gatsby-image'


import Hero from '../utilities/Hero';

const Base = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
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


const Blog = ({
  data
}) => (
  
  <Layout>
    <Wrapper>
        <Hero>
        <h1>
              Nuestros blogs, aprende con nosotros
                </h1>
        </Hero>
        
        <Wave />
        <Img fluid={data.image.imagen.fluid} alt={data.image.imagen.title} />
      </Wrapper>
    <Container type="big">
      <Base>
        {data.allContentfulPost.edges.map(post => (
          <ItemBlog
            key={post.node.title}
            path={post.node.slug}
            cover={post.node.heroImage.fluid}
            title={post.node.title}
            date={post.node.date}
            category={post.node.category}
            timeToRead={post.node.body.childMarkdownRemark.timeToRead}
            excerpt={post.node.body.childMarkdownRemark.excerpt}
            tags={post.node.tags}
          />
        ))}
      </Base>
    </Container>
    
    <Footer />
  </Layout>
);

export default Blog;

// Blog.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array.isRequired,
//     }),
//   }).isRequired,
// };

export const pageQuery = graphql`
{
  image:  contentfulFondos(nombre:{eq:"blog"}){
    imagen{
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

  allContentfulPost: allContentfulPost{
    edges{
      node{
        slug
        title
        date: publishDate
        category
        tags{
          title
          id
          slug
        }
        body{
          childMarkdownRemark{
            excerpt
            timeToRead
          }
        }
         heroImage {
         title
        fluid(maxWidth: 900, quality: 85,) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      }
    }
  }
}
`;
