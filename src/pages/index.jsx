/* eslint max-len: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'react-emotion';
import { Container, Layout } from 'elements';
import Footer from '../components/Footer';
import FeaturedProject from '../components/FeaturedProject';
import FeaturedPost from '../components/FeaturedPost';
import Header from '../components/Header';
import Button from '../components/Button';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  margin-top: -10rem;
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10rem;
`;

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

const Index = () => (
  <Layout>
    <Header
      big
      title={
        <React.Fragment>
          Kommunikationsdesigner & <br /> Front-End Entwickler
        </React.Fragment>
      }
    />
    
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

export default Index;



