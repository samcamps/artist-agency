import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from 'react'
import Layout from '../components/layout'
import Artist from '../components/Artist'
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
  section,
  subtitle,
  artists
} from "../page.module.css"

const IndexPage = ({
  data: {
    wpPage: { homeFields },
  },
}) => {
  const image = getImage(homeFields.picture.localFile)

  return (
    <Layout>
      <section className={header}>
        <article className={headerInfo}>
          <h1 className={headerTitle}>{homeFields.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homeFields.description,
            }}
          />
          <a className={CTA} target="__blank" href={homeFields.callToAction.url}>
            {homeFields.callToAction.title}
          </a>
        </article>
        <div>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homeFields.picture.altText}
          />
        </div>
      </section>

      <section className={section}>
        <h2 className={subtitle}>Featured Artists</h2>
        <div dangerouslySetInnerHTML={{ __html: homeFields.description }} />
        <div className={artists}>
          {homeFields.artists.map(artist => {

            return <Artist slug={`artists/${artist.slug}`} key={artist.id} artist={artist} />
          })}
        </div>
      </section>


    </Layout >
  )
}


export default IndexPage


export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homeFields {
      artists {
        ... on WpArtist {
          id
          slug
          artistMeta {
            artistName
            firstName
            lastName
            profilePicture {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
                }
              }
            }
          }
        }
      }
      callToAction {
        title
        url
      }
      description
      title
      picture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}
`