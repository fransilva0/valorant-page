import styled from "styled-components";

export const AgentsSection = styled.section`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    justify-items: center;
    padding: 2rem;

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;

export const AgentCard = styled.li`
    background: #111823;
    color: #000;
    margin: 2rem;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

`;

export const Image = styled.img`
    width: 20rem;

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        width: 15rem;
    }

`;

export const TitleAgent = styled.p`
    font-size: 1.5rem;
    font-family: 'Montsserat', sans-serif;
    padding: 0.5rem;
    background: #fff;

`;