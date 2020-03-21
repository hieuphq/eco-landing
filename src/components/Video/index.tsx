import React from 'react'

interface Props {
  videoSrcURL: string
  className?: string
}
const Video: React.FC<Props> = ({ videoSrcURL, className }) => (
  <div className="w-full h-auto pb-8">
    <video loop={true} autoPlay={true} muted={true} playsInline={true}>
      <source src={videoSrcURL} type="video/mp4" />
    </video>
  </div>
)

export default Video
