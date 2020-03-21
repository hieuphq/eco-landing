import React from 'react'

interface PartnerInfo {
  name: string
  imgSrc: string
  title: string
  website: string
  needBorder?: boolean
}

const Partner = () => {
  const partners: PartnerInfo[] = [
    {
      name: 'ecopark',
      imgSrc: './img/ecopark-logo.png',
      title: 'ecopark',
      website: 'https://ecoparkgrand.com',
    },
    {
      name: 'alphanam group',
      imgSrc: './img/alphanam-logo.png',
      title: 'Alphanam group',
      website: 'https://www.alphanam.com.vn',
    },
    {
      name: 'vietstarland',
      imgSrc: './img/vietstarland-logo.png',
      title: 'Viet Star Land',
      website: 'https://vietstarland.vn/vi',
    },
    {
      name: 'starlake daewoo',
      imgSrc: './img/starlake-logo.png',
      title: 'Starlake Daewoo',
      website: 'http://www.starlake-hanoi.com/en/',
    },
    {
      name: 'savills hanoi',
      imgSrc: './img/savills-logo.png',
      title: 'savills hanoi',
      website: 'https://vn.savills.com.vn/offices/hanoi.aspx',
    },
    {
      name: 'bidv',
      imgSrc: './img/bidv-logo.png',
      title: 'BIDV',
      website: 'https://www.bidv.com.vn',
    },
  ]
  return (
    <div className="py-5 sm:pt-20 sm:pb-20">
      <div className="flex flex-wrap">
        <div className="w-full pb-8 sm:w-1/3">
          <h2 className="text-secondary font-sans text-5xl font-bold text-center">
            ĐƠN VỊ
            <br />
            HỢP TÁC
          </h2>
        </div>
        <div className="w-full sm:w-2/3">
          <div className="grid grid-cols-3 grid-rows-2 mx-2 col-gap-2 row-gap-1 sm:pr-10">
            {partners.map(itm => {
              return (
                <div
                  key={itm.name}
                  className="mb-2 border-solid border border-secondary rounded-sm"
                >
                  <a href={itm.website} target="__blank">
                    <img className="w-full" alt={itm.name} src={itm.imgSrc} />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner
