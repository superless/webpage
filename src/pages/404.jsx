/* eslint max-len: 0 */

import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Container, Layout } from '../elements';
import config from '../../config/website';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ErrorPage = () => (
  <Layout>
    <Helmet title={`404 | ${config.siteTitle}`} />
    <Header title="404" />
    <Container>
      <p />
      <h1>
        Oh Oh. Parece que escribiste mal la URL {' '}
        <span role="img" aria-label="thinking">
          🤔
        </span>
      </h1>
      <h3>La página que buscabas no se encuentra en nuestros archivos.</h3>
      <p>
        Haz click aquí para volver al inicio <Link to="./">PÁGINA DE INICIO</Link> o puedes volver atrás,
        no te rindas.{' '}
        <a href="https://www.twitter.com/trifenix_io" target="_blank" rel="nofollow noopener noreferrer">
          Twitter
        </a>{' '}
        <span role="img" aria-label="wink">
          😉
        </span>
      </p>
      <p />
    </Container>
    <Container>
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          overflow: 'hidden',
          width: '100%',
          height: 'auto',
          marginBottom: '2rem',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          title="Never gonna give you up"
          width="460"
          height="315"
          src = "https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </Container>
    <Footer />
  </Layout>
);

export default ErrorPage;
