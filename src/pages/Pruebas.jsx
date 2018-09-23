/* eslint max-len: 0 */

import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Container, Layout } from '../elements';
import config from '../../config/website';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ServicesBar from '../components/ServicesBar'

const ErrorPage = () => (
  <Layout>
    <Helmet title={`OTRO PUEDE SER? | ${config.siteTitle}`} />
    <Header title="Espacio de Pruebas?" />
    <Container>
      <ServicesBar/>
    </Container>
    <Container>
    </Container>
    <Footer />
  </Layout>
);

export default ErrorPage;
