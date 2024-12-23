import { FeaturedBanner, DivTexts, TextBanner, TitleBanner } from './styles'
import { RedButton } from '../Button'

export function Banner(props) {
    return (
        <FeaturedBanner imageUrl={props.imageUrl}>
            <DivTexts>
                <TextBanner>{props.textBanner}</TextBanner>
                <TitleBanner>{props.titleBanner}</TitleBanner>
                <RedButton url={props.url}>{props.text}</RedButton>
            </DivTexts>
        </FeaturedBanner>
    )
}