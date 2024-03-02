import localFont from 'next/font/local'

import { Josefin_Sans } from 'next/font/google'

export const courgetteFont = localFont({
    src:"../public/fonts/Courgette-Regular.ttf"
})

export const onlineFont = Josefin_Sans({ 
weight: ['400', '700'],
style: ['normal', 'italic'],
subsets: ['latin'],
display: 'swap', })

 