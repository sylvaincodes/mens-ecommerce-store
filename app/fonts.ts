import localFont from 'next/font/local'

import { Roboto } from 'next/font/google'

export const courgetteFont = localFont({
    src:"../public/fonts/Courgette-Regular.ttf"
})

export const robotoFont = Roboto({ 
weight: ['400', '700'],
style: ['normal', 'italic'],
subsets: ['latin'],
display: 'swap', })

 