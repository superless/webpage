import React from 'react'

import ScrollableAnchor from 'react-scrollable-anchor'
import { graphql, StaticQuery } from 'gatsby'
import { Link } from 'gatsby';



import Section from './section'
import { SectionCards, Card } from './card'
import SectionImageBoxes from './boxImage'
import Subscribe from './formRegister'

import SectionPhone from './sectionPhone'

import {  access,  boxes, control, form } from '../../data/home.yml'
import { theme } from '../../library/utils'


const Home = () => {
  
  return (
    <StaticQuery
      query={graphql`
        query {
          index : contentfulIndex(text : {eq : "index"}){
            wideContent{
              titulo
              imagen{
                title
                fluid(maxWidth: 657) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
              contenido {
                  childMarkdownRemark{
                    html : rawMarkdownBody
                  }
                
              }
              blog{
                slug
              }
            }
            cards{
              id
              idNumber
              blog {
                slug
              }
              titulo
               contenido {
                  childMarkdownRemark{
                    html
                  }
                
              }
              imagen{
                title
                file{
                  url
                }
                
              }
              
            }
            boxes {
              idNumber
              titulo
              childContentfulBlogFrontItemContenidoTextNode{
               childMarkdownRemark{
                 html
               }
             }
              imagen{
               file{
                 url
               }
             }

           }
          }
        }
      `}
      render={({ index }) => {

        var boximages = index.boxes.map(box => {return {id : box.idNumber, title : box.titulo, image : box.imagen.file.url}});
        
        return (
          <>
            
            <ScrollableAnchor id={index.wideContent[0].blog.slug}>
            <Link to={index.wideContent[0].blog.slug}>
              <div>
                <Section
                  title={index.wideContent[0].titulo}
                  content={index.wideContent[0].contenido.childMarkdownRemark.html}
                  padding={'14vh 0 8vh'}
                  
                />
              </div>
              </Link>
            </ScrollableAnchor>
            
            <SectionPhone image={index.wideContent[0].imagen}/>
           
            <ScrollableAnchor id={index.wideContent[1].blog.slug}>
              <Link to={index.wideContent[1].blog.slug}>
              <div>
                <Section
                  title={index.wideContent[1].titulo}
                  content={index.wideContent[1].contenido.childMarkdownRemark.html}
                  padding={'14vh 0 8vh'}
                  color={{
                    background: theme.whiteFont
                  }}
                />
              </div>
              </Link>
            </ScrollableAnchor>
            <SectionPhone image={index.wideContent[1].imagen}/>
            
            
            
            <SectionCards>
              { index.cards.map(card => 
                {
                  
  
                  return (
                    <Card
                      key={card.idNumber}
                      title={card.titulo}
                      img={card.imagen.file.url}
                      card={card.idNumber}
                      slug = {card.blog.slug}
                    />
                  )
  
                }
                )
              }
            </SectionCards>
            
            <ScrollableAnchor id={index.wideContent[2].blog.slug}>
              <Link to={index.wideContent[2].blog.slug}>
              <div>
                <Section
                  title={index.wideContent[2].titulo}
                  content={index.wideContent[2].contenido.childMarkdownRemark.html}
                  padding={'14vh 0 8vh'}
  
                />
              </div>
              </Link>
            </ScrollableAnchor>
            <SectionPhone image={index.wideContent[2].imagen}/>
            <Section
              title={access.title}
              content={access.subTitle}
              background= {access.background}
            />
            <SectionImageBoxes
              data={boximages}
            />
            <Section
              title={control.title}
              content={control.subTitle}
              padding={'20vh 0 0'}
            />
            <ScrollableAnchor id="contact">
              <Subscribe
                title={form.title}
                button={form.button}
              />
            </ScrollableAnchor>
          </>
        )
      }
        
        
      }
    />
  )
}



export default Home;
