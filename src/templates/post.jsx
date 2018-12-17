import React from 'react';
import {Share} from 'react-twitter-widgets'
import styled, { keyframes, css } from 'react-emotion';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { SEO, Container, Content, Wave, Line, Layout } from '../elements';
import { hideS, Hero, InfoText } from '../utilities';
import Button from '../components/Button';
import Footer from '../components/Footer';
import TagList from '../components/TagList';
import config from '../../config/website'
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

const Information = styled.div`
  margin-top: 2rem;
  font-family: ${props => props.theme.fontFamily.heading};
  a {
    color: ${props => props.theme.colors.white.base};
    transition: all 0.4s;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${props => props.theme.colors.white.base};
      color: ${props => props.theme.colors.white.base};
    }
    &:focus {
      color: ${props => props.theme.colors.white.base};
    }
  }
`;

const Note = styled.p`
  margin-bottom: 4rem;
`;

const fontBold = css`
  font-weight: 700;
`;

const PostTemplate = ({ data }) => {
  const {
    title,
    slug,
    id,
    heroImage,
    body,
    publishDate,
    category,
    tags,
  } = data.contentfulPost
  const postNode = data.contentfulPost
  
  

  return (
    <Layout>  
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Wrapper>
        <Hero>
          <h1>{title}</h1>
          <Information>
            {publishDate} &mdash; Lectura de: {postNode.body.childMarkdownRemark.timeToRead} Min. &mdash; <span className={hideS}>Categoría: </span>
            <Link to={`/categories/${kebabCase(category)}`}>{postNode.category}</Link>
          </Information>
        </Hero>
        <Wave />
        <Img fluid={heroImage.fluid} />
      </Wrapper>
      <Container type="article">
        <Content input={body.childMarkdownRemark.html} />
        <Line aria-hidden="true" />
        <TagList tags={tags} />
        <Note>
          <span className={fontBold}>¿Te interesó?</span> Lee las otras publicaciones en la categoría{' '}
          <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
        </Note>
        <Note>
          <Share url={`${config.siteUrl}/${slug}`} />
        </Note>
      </Container>
      
      
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      id
      slug
      category
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "DD-MM-YYYY")
      tags {
        title
        id
        slug
      }
      heroImage {
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
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
          timeToRead
        }
      }
    }
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          id
        }
        previous {
          slug
        }
        next {
          slug
        }
      }
    }
  }
`


export default PostTemplate
