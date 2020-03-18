import React from "react"
import "./style.css"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "nuka-carousel"
import Image from "gatsby-image"

interface Props {
  data: {
    site: {
      siteMetadata: {
        shortTitle: string
      }
    }
  }
}
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
    <div className="home-slider">
      <Carousel className="home-slide" autoplay withoutControls wrapAround>
        <Image fluid={banner1} />
        <Image fluid={banner2} />
      </Carousel>
      <div className="down animated pulse">
        <img className="pulse" src="./img/down.png" />
      </div>
    </div>
  )
}
export default HomeSlider

// export const pageQuery = graphql`
//   query {
//     ecoparkFluidImage: file(relativePath: { eq: "ecopark-1-web.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 2500) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     ecoparkFixedImage: file(relativePath: { eq: "ecopark-1-mobile.png" }) {
//       childImageSharp {
//         fixed(width: 376, height: 668) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
