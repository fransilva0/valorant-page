import { ErrorSection, MessageError, Image } from "./styles"

export default function Error(props) {
    return (
        <ErrorSection>
            <div>
                <MessageError>{props.message}</MessageError>
                <Image src="https://media.valorant-api.com/sprays/8b820b5b-4988-4385-610e-d7923724de68/fulltransparenticon.png" />
            </div>
            
        </ErrorSection>
    )
}