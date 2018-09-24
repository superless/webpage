/* eslint max-len: 0 */

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Layout } from '../elements';
import Footer from '../components/Footer';
import Header from '../components/Header';
import config from '../../config/website';

const Impressum = () => (
  <Layout>
    <Helmet title={`Nuestra Empresa | ${config.siteTitle}`} />
    <Header title="Nuestra Empresa" />
    <div style={{ marginTop: '3rem' }}>
      <Container type="article">
        <h2>TRIFENIX</h2>
       
        <h2>Contacto</h2>
        <p>
          E-Mail:{' '}
          <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#108;&#101;&#107;&#111;&#097;&#114;&#116;&#115;&#046;&#100;&#101;">
            hola@trifenix.com
          </a>
        </p>
       
        <h2>Nuestra empresa</h2>
        <p>
          Somos un equipo de tres desarrolladores, de distintas áreas comerciales, con más de 10 años de experiencia asesorando a grandes empresas en la busqueda de la optimización tecnológica.
        </p>
        <p>
          Mientras trabajamos en distintas empresas y distintos paises, 
          siempre vimos la necesidad de una nueva visión, aquella donde las pequeñas y medianas empresas puedan llegar 
          a un nivel óptimo de tecnología (y de ingresos) con los costos de las nuevas tendencias en la nube y la facilitación de los procesos de construcción.
        </p>
        <p>
          Podemos apreciar más que nadie, los efectos de la modernidad y como en tecnología, lo relativamente nuevo ya es absoleto, por tanto,
          también sus especialistas, servicios comunes que se establecían en las empresas ya no lo son, todo está derivando al uso de la nube, desplazando
          todos los procesos a las grandes corporaciones, trayendo consigo grandes beneficios, pero recordandonos nuevamente, 
          que el que no avanza, se queda. 
          </p>
          <p>
          Nuestro aprendizaje ha sido constante, porque ahora nosotros definimos el mejor camino,  tenemos todas las competencias
          para hacer cambiar el rumbo de las empresas, no estamos estancados en procesos anticuados, ni gente que nos limite.
          </p><p>
          Hemos estudiado profundamente los costos y los beneficios, y esperamos ansiosamente mostrarle lo que podemos hacer por su compañía.



        </p>
      </Container>
    </div>
    <Footer />
  </Layout>
);

export default Impressum;
