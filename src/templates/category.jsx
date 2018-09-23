import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'react-emotion';
import Helmet from 'react-helmet';
import { Container, Layout } from '../elements';

import Footer from '../components/Footer';
import Header from '../components/Header';
import ItemTagCategory from '../components/ItemTagCategory'

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white.light};
`;

const CategoryTemplate = ({
  pageContext: { category },data}) => {
    
    let edges = data.allContentfulPost.edges;
    
  return (
    <Layout>
      <Helmet title={`${category} | ${category}`} />
      <Header title={category}>
        
        <StyledLink to="/categories">Categorias</StyledLink>
      </Header>
      <Container>
      {edges.map(element => {
        
        return (
        <ItemTagCategory
          key={element.node.title}
          title={element.node.title}
          category={element.node.category}
          path={element.node.slug}
          date={element.node.publishDate}
          timeToRead={element.node.body.childMarkdownRemark.timeToRead}
          tags={element.node.tags}
          excerpt={element.node.body.childMarkdownRemark.excerpt}
        />
      );})}
      </Container>
      <Footer />
    </Layout>
  );
}

export default CategoryTemplate;


export const pageQuery = graphql`
query($category: String!)
{
  allContentfulPost(filter:{category:{eq:$category}}){
   edges{
     node{
       title
       category
       slug
       publishDate
       body{
         childMarkdownRemark{
           timeToRead
           excerpt
         }
       }
       tags{
         title
         id
         slug
       }
     }
   }
 }
}
`;

