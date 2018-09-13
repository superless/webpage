import React from 'react'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'
import { graphql, StaticQuery } from 'gatsby'




import Section from './section'
import { SectionCards, Card } from './card'
import SectionBoxes from './box'
import Subscribe from './formRegister'
import SectionWatch from './sectionWatch'
import SectionPhone from './sectionPhone'

import { hero, imagine, buy, access, cards, boxes, control, form } from 'data/home.yml'
import { theme } from 'library/utils'
import { retinaImage } from 'polished';

const Home = () => {
  const dataArray = Object.keys(cards).map((k) => cards[k])
  return (
    <StaticQuery
      query={graphql`
        query {
          img: file(relativePath: { regex: "/hero_home/"}) {
            childImageSharp {
              fixed(width: 340) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      `}
      render={({ img }) => (
        <>
          
          <ScrollableAnchor id='imagine'>
            <div>
              <Section
                title={imagine.title}
                content={imagine.subTitle}
                padding={'14vh 0 8vh'}
              />
            </div>
          </ScrollableAnchor>
          <SectionWatch />
          <Section
            title={buy.title}
            content={buy.subTitle}
            padding={'4vh 0'}
            color={{
              background: theme.gray
            }}
          />
          <SectionPhone />
          <SectionCards>
            {dataArray.map(card => {
              console.log(cards)
              return (
                <Card
                  key={card.id}
                  title={card.title}
                  img={card.img}
                  card={card.id}
                />
              );
            }
              )
            }
          </SectionCards>
          <Section
            title={access.title}
            content={access.subTitle}
            background= {access.background}
          />
          <SectionBoxes
            data={boxes}
          />
          <Section
            title={control.title}
            content={control.subTitle}
            padding={'20vh 0 0'}
          />
          <Subscribe
            title={form.title}
            button={form.button}
          />
        </>
      )}
    />
  )
}



export default Home;
