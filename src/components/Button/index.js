import { GradientButton, RedButtonStyled } from './styles'

export function HighlightButton(props) {
    return (
        <GradientButton href={props.url} target='_Blank' >{props.text}</GradientButton>
    )
}

export function RedButton(props) {
    return (
        <RedButtonStyled href={props.url} target='_Blank' >{props.children}</RedButtonStyled>
    )
}