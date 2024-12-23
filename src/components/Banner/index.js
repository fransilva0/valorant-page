import { FeaturedBanner, DivTexts, TextBanner, TitleBanner, FeaturedAgentBanner, Image, TextAgentBanner } from './styles'
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

export function AgentBanner(props) {
    return (
        <FeaturedAgentBanner>
            <DivTexts>
                <Image src={props.agentImage} />
                <TitleBanner>{props.agentName}</TitleBanner>
                <TextAgentBanner>{props.agentBio}</TextAgentBanner>
            </DivTexts>
            
        </FeaturedAgentBanner>
    )
}