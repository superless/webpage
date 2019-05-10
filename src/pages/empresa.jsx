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
        <h2 align="center">TRIFENIX</h2>
       
        
        <p>
          Somos un equipo de desarrolladores de distintas áreas comerciales, con más de 10 años de experiencia asesorando a grandes empresas en la búsqueda de la optimización tecnológica.
        </p>
        <p>
          Siempre observamos la necesidad de una nueva visión de empresa a lo largo de nuestra trayectoria laboral en distintas empresas y distintos paises, aquella donde las pequeñas y medianas empresas puedan llegar 
          a un nivel óptimo de tecnología (y de ingresos), con los costos de las nuevas tendencias en la nube y la facilitación de los procesos de construcción.
        </p>
        <p>
          Podemos apreciar más que nadie, los efectos de la modernidad y como en tecnología, lo relativamente nuevo ya es absoleto, por tanto,
          también sus especialistas, servicios comunes que se establecían en las empresas ya no lo son, todo está derivando al uso de plataformas en la nube (cloud computing), desplazando
          todos los procesos a las grandes corporaciones, trayendo consigo grandes beneficios, pero recordandonos nuevamente,
          el que no quiere avanzar, pues simplemente se queda sumergido en las tecnologias obsoletas. 
          </p>
          <p>
          Nuestro aprendizaje ha sido constante, porque ahora nosotros definimos el mejor camino, tenemos todas las competencias
          para hacer cambiar el rumbo de las empresas, no estamos estancados en procesos anticuados, ni gente que nos limite.
          </p><p>
          Hemos estudiado profundamente los costos y los beneficios, y esperamos ansiosamente mostrarle lo que podemos hacer por su compañía.
          </p>
          <h2>Misión</h2>
<p>
Asesoramos a las organizaciones sin fines de lucro, pequeñas y medianas empresas en su transformación digital.

</p>

   <h2>Visión</h2>
<p>
  Ser una empresa que colabore en el crecimiento de nuestros clientes, en base a su confianza en la tecnología y sus nuevos modelos de eficiencia que entregan el valor real a su compañia.  
</p>
<h2>Contacto</h2>
        <p>
          E-Mail:{' '}
          <a href="mailto:hola@trifenix.com">
            hola@trifenix.com
          </a>
          <p>Telefono: +56 2 5026284</p>
        </p>

      </Container>
    </div>
    <Footer />
  </Layout>
);

export default Impressum;
