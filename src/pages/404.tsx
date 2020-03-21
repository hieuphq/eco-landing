import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="h-screen w-screen bg-green-600 flex justify-center content-center flex-wrap">
        <p className="font-sans text-white error-text">404</p>
      </div>

      <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
        <a className="border-b" href="/">
          Home
        </a>
      </div>
      {/* <div>
        <img
          className="block mx-auto w-1/2"
          alt="Ghost getting abducted by aliens"
        />
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div> */}
    </Layout>
  )
}

export default NotFoundPage
