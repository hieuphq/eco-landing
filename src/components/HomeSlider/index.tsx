import React from 'react'
import Carousel from 'nuka-carousel'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const HomeSlider = () => {
  const {
    webBanner,
    mobileBanner,
    webBanner2,
    mobileBanner2,
  } = useStaticQuery(graphql`
    query {
      webBanner: file(relativePath: { eq: "ecopark-1-web.png" }) {
        childImageSharp {
          fluid(maxWidth: 2500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileBanner: file(relativePath: { eq: "ecopark-1-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 376) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webBanner2: file(relativePath: { eq: "ecopark-2-web.png" }) {
        childImageSharp {
          fluid(maxWidth: 2500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileBanner2: file(relativePath: { eq: "ecopark-2-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 376) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const banner1 = [
    mobileBanner.childImageSharp.fluid,
    {
      ...webBanner.childImageSharp.fluid,
      media: `(min-width: 767px)`,
    },
  ]
  const banner2 = [
    mobileBanner2.childImageSharp.fluid,
    {
      ...webBanner2.childImageSharp.fluid,
      media: `(min-width: 767px)`,
    },
  ]

  return (
    <div>
      <Carousel
        className="max-h-screen"
        autoplay
        withoutControls
        wrapAround
        autoplayInterval={1500}
      >
        <Image fluid={banner1} />
        <Image fluid={banner2} />
      </Carousel>
    </div>
  )
}

export default HomeSlider
