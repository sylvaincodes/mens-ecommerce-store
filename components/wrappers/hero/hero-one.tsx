import { Button } from '@/components/ui/button'
import { ButtonStyle } from '@/components/ui/button-style'
import { Row } from '@/components/ui/row'

export const HeroOne = () => {
  return (
    <section className='pt-40 text-white'>
          <Row classPlus='flex-col gap-y-12'>
            <h1 className='text-4xl text-center md:text-6xl font-bold tracking-wild'>
              Welcome to Women World.</h1>
            <h2 className='text-2xl md:text-3xl font-lighter'>Do not miss this collection.</h2>
            
            <ButtonStyle href="shop" classPlus='animate-wiggle'>
              check it out!
            </ButtonStyle>

          </Row> 
          </section>
  )
}
