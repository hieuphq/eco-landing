import React from 'react'
import '../css/style.css'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout location={window.location}>
    <SEO title="Trang chủ" />
    <div className="md:flex bg-white rounded-lg p-6">
      <img
        className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        src="https://randomuser.me/api/portraits/women/17.jpg"
      />
      <div className="text-center md:text-left">
        <h2 className="text-lg">Erin Lindford</h2>
        <div className="text-purple-500">Customer Support</div>
        <div className="text-gray-600">erinlindford@example.com</div>
        <div className="text-gray-600">(555) 765-4321</div>
      </div>
    </div>
  </Layout>
)
