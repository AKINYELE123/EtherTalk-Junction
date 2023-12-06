import React from 'react'

import Style from "./Loader.module.css"
import Image from 'next/image'

import images from "../../assets"

const Loader = () => {
  return (
    <div className={Style.Loader}>
      <div className={Style.Loader_box}>
        <Image src={images.loader} alt='loader' width={80} height={80}/>
      </div>
    </div>
  )
}

export default Loader