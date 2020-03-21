import React, { useState } from 'react'
import '../css/style.css'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HomeSlider from '../components/HomeSlider'
import Island from '../components/Island'
import UniquePosition from '../components/UniquePosition'
import UniqueDesign from '../components/UniqueDesign'
import PersonalImprint from '../components/PersonalImprint'
import UpperClassPrivilege from '../components/UpperClassPrivilege'
import Video from '../components/Video'
import Partner from '../components/Partner'
import ContactBtn from '../components/ContactBtn'
import ContactForm from '../components/ContactForm'
export default () => {
  const [willShow, setWillShow] = useState(false)
  return (
    <Layout>
      <SEO title="Trang chủ" />
      <HomeSlider />
      <Island />
      <UniquePosition />
      <UniqueDesign />
      <PersonalImprint />
      <UpperClassPrivilege />
      <Video videoSrcURL="https://ecoparkgrand.com/wp-content/uploads/2019/05/videos.mp4" />
      <Partner />
      <div className="p-10 text-center">
        <ContactBtn
          className="sm:py-5 sm:px-20"
          title="Chi tiết"
          onClick={() => {
            setWillShow(true)
          }}
        />
      </div>
      <ContactForm
        willShow={willShow}
        onClose={() => {
          console.log('HELP me')
          setWillShow(false)
        }}
      />
    </Layout>
  )
}
