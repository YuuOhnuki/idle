import React from 'react'
import logo from '../../public/I-dle_logo.png'
import Image from 'next/image'

const HeaderLogo = () => {
  return (
    <Image src={logo} alt='i-dle logo' fill/>
  )
}

export default HeaderLogo