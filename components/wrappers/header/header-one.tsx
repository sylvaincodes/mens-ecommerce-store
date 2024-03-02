import { Container } from '@/components/ui/container'
import { Row } from '@/components/ui/row'
import { Menu } from './sub-components/menu'
import { Logo } from '@/components/ui/logo'
import { IconsGroups } from './sub-components/icons-groups'
import { HeroOne } from '../hero/hero-one'

const HeaderOne = () => {

  return (
    <header className='min-h-screen min-w-screen' 
      style={{ backgroundImage: `url('/images/hero/hero_1.jpg')`, backgroundSize: 'cover', backgroundPosition:'center' }}>
      <Container>
            
          {/* navbar */}
          <Row classPlus='flex-row gap-y-12 text-white justify-between min-h-[120px]'>
              <Menu/>
              <Logo classPlus="hidden md:block" />
              <IconsGroups/>
          </Row>   

          {/* hero */}
          <HeroOne/>

      </Container>
    </header>

  )
}

export default HeaderOne
