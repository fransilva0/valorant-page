import { Nav, Image } from './styles'
import { HighlightButton } from '../Button'
import Logo from '../../images/icon-valorant.png'

export default function Navbar() {
    return  (
       <Nav>
            <Image src={Logo} alt='Logo do Valorant' />
            <HighlightButton text='Jogue Agora' url='https://playvalorant.com/pt-br/' />
       </Nav>
    )
}