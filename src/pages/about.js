import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
    header,
    headerInfo,
    headerPicture,
    subtitle,
    missionSection,
    missionInfo,
} from "../page.module.css"

const AboutPage = ({
    data: {
        wpPage: {
            aboutUsFields
        }
    }
}) => {

    const goalPicture = getImage(aboutUsFields.goalPicture.localFile)
    const missionPicture = getImage(aboutUsFields.missionPicture.localFile)

    return (
        <Layout >
            <section className={header}>
                <article className={headerInfo}>
                    <h2 className={subtitle}>{aboutUsFields.goalTitle}</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: aboutUsFields.goalDescription,
                        }}
                    />
                </article>
                <GatsbyImage
                    className={headerPicture}
                    image={goalPicture}
                    alt={aboutUsFields.goalPicture.altText}
                />
            </section>
            <section className={missionSection}>
                <GatsbyImage
                    className={headerPicture}
                    image={missionPicture}
                    alt={aboutUsFields.missionPicture.altText}
                />
                <article className={missionInfo}>
                    <h2 className={subtitle}>{aboutUsFields.missionTitle}</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: aboutUsFields.missionDescription,
                        }}
                    />
                </article>
            </section>
        </Layout>
    )
}

export default AboutPage

export const query = graphql`
query {
  wpPage(slug: {eq: "about-us"}) {
    aboutUsFields {
      missionTitle
      missionDescription
      goalTitle
      goalDescription
      goalPicture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      missionPicture {
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