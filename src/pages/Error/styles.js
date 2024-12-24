import styled from "styled-components";

export const ErrorSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    height: 90vh;
    box-sizing: border-box;
    padding: 1rem;
    position: relative;

    div {
        position: absolute;
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%); 
    }
`;

export const MessageError = styled.p`
    font-size: 1.5rem;
    font-family: 'Montsserat', sans-serif;
    padding: 0.5rem;
`;

export const Image = styled.img`
    width: 15rem;
    padding: 2rem;

`;