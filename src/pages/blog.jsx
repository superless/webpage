import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Container, Layout } from 'elements';
import config from '../../config/website';
import ItemBlog from '../components/ItemBlog';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Base = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
`;

const Blog = ({
  data
}) => (
  
  <Layout>
    <Helmet title={`Blog | ${config.siteTitle}`} />
    <Header title="Blog">Nustros blogs, aprende de nuevas tecnologías</Header>
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
  allContentfulPost{
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
