import { Banner } from "../../components/Banner"

export default function Home() {
    const imageUrl = 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0c67438c8b3a418b5ca28f9f234506745493ae42-854x484.png';
    return (
        <>
            <Banner imageUrl={imageUrl} textBanner='Um jogo de tiro tático 5x5 com personagens originais' titleBanner='Valorant' url='https://playvalorant.com/pt-br/' text='Jogue Agora' />
        </>
    )
}