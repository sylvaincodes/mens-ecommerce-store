import React , { Fragment } from 'react'
import { FooterOne } from '../wrappers/footer/footer-one'
import HeaderTwo from '../wrappers/header/header-two'

export const LayoutTwo = ({children}: { children: React.ReactNode}) => {
  return (
    <Fragment>

        <HeaderTwo/>
        {children}
        <FooterOne/>

    </Fragment>
  )
}

 