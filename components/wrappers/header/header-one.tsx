import { courgetteFont } from '@/app/fonts'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Row } from '@/components/ui/row'
import { cn } from '@/lib/utils'
import { Menu, ShoppingBasket , User2 } from 'lucide-react'
import Link from 'next/link'

const HeaderOne = () => {

  return (

    <header className='min-h-screen min-w-screen' 
    style={{ backgroundImage: `url('/images/hero/hero_1.jpg')` }}>
      <Container>
            
          {/* navbar */}
          <Row classPlus='flex-row gap-y-12 text-white justify-between min-h-[120px]'>
              <div>
                <button>
                  <Menu size="42"/>
                </button>
              </div>
              
              <div className={courgetteFont.className}>
                <Link href="/" className={cn('text-4xl font-bold tracking-tight capitalize')}>
                  men need women.
                </Link>
              </div>

              <div className='inline-flex gap-x-8 w-[32px]'>
                <Link href="/">
                  <User2 size="32"/>
                </Link>
                <Link href="/">
                  <ShoppingBasket  size="32"/>
                </Link>
              </div>

          </Row>   

          {/* hero */}
          <section className='pt-40 text-white'>
          <Row classPlus='flex-col gap-y-12'>
            <h1 className='text-sm md:text-6xl font-bold capitalize tracking-wild'>
              welcome to women world.</h1>
            <h2 className='text-sm md:text-3xl font-lighter'>Do not miss this collection.</h2>
            <Button variant="primary" className="p-8 rounded-none capitalize">
              check it out!
            </Button>
          </Row> 
          </section>

      </Container>
    </header>

  )
}

export default HeaderOne
