import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'react-emotion';
import Helmet from 'react-helmet';
import { Container, Layout } from 'elements';
import config from '../../config/website';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ItemTagCategory from '../components/ItemTagCategory';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white.light};
`;

const Tag = ({
  pageContext: { tag },
  data
}) => {
 
  let {0:first} = data.allContentfulTag.edges;
 
  
  return (
  <Layout>
    <Helmet title={`${tag} | ${config.siteTitle}`} />
    <Header title={tag}>
      
      <StyledLink to="/tags">Todos los tags</StyledLink>
    </Header>
    <Container>
      {first.node.post.map(post=>{
          
          return (
            <ItemTagCategory
              key={post.key}
              title={post.title}
              category={post.category}
              path={post.slug}
              date={post.date}
              timeToRead={post.body.childMarkdownRemark.timeToRead}
              tags={post.tags}
              excerpt={post.body.childMarkdownRemark.excerpt}
            />
          );

        })}
    </Container>
    <Footer />
  </Layout>
)};

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query($tag: [String]) {
    allContentfulTag(filter:{title:{in: $tag}}){
      
      edges{
        node{
          post{
            category
            title
            key:id
            slug
            date:publishDate
            body {
              childMarkdownRemark {
                excerpt(pruneLength: 320)
                timeToRead
              }
            }
            tags{
              title
              slug
              id
              
            }
            
          }
            
        }
      }
 }
}
`;
