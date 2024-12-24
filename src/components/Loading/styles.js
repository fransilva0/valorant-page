import styled from "styled-components";

export const LoadingSection = styled.section`
    display: flex;
    flex-direction: column;
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

export const Image = styled.img`
    width: 20rem;
    margin: 1rem;
    margin-right: 2rem;
`;