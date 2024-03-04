import { Container } from '@/components/ui/container'
import { Row } from '@/components/ui/row'
import { LeftMenu } from './sub-components/left-menu'
import { Logo } from '@/components/ui/logo'
import { IconsGroups } from './sub-components/icons-groups'
import { HeroOne } from '../hero/hero-one'

const HeaderTwo = () => {

  return (
    <header className='py-4 min-w-screen bg-white shadow-lg max-h-[70px]'>
      <Container>
            
          {/* navbar */}
          <Row classPlus='flex-row gap-y-12 text-black justify-between '>
              <LeftMenu/>
              <Logo classPlus="hidden md:block" />
              <IconsGroups theme='dark'/>
          </Row>   

      </Container>
    </header>

  )
}

export default HeaderTwo
