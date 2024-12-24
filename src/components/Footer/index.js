import { FooterSection, Image } from "./styles"
import Logo from "../../images/icon-valorant.png"

export default function Footer() {
    return (
        <FooterSection>
            <Image src={Logo} alt='Logo do Valorant' />
            <p>RIOT GAMES, VALORANT e todos os logotipos associados são marcas comerciais, marcas de serviço e/ou marcas registradas da Riot Games, Inc.</p>
            <p>@ 2024 - Fã page desenvolvida por <a href="https://fransilva0.github.io/portfolio-dev/" target="_Blank">Francileudo Oliveira</a></p>
            <Image src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/fb29dac6eccbcc25808cef911e11bda1c435eb1d-397x232.png?&h=100&fit=max" alt="Classificação indicativa do jogo, maiores de 14" />
        </FooterSection>
    )
}