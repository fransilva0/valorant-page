import styled from "styled-components";

export const WeaponsSection = styled.section`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    justify-items: center;
    align-items: flex-start;
    padding: 2rem;

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;

export const WeaponCard = styled.li`
    background: #111823;
    text-align: center;
    margin: 2rem;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

`;

export const Image = styled.img`
    width: 15rem;
    padding: 2rem;

`;

export const TitleWeapon = styled.p`
    font-size: 1.5rem;
    font-family: 'Montsserat', sans-serif;
    padding: 0.5rem;
    background: #fff;

`;

export const ErrorSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`;

export const MessageAgentError = styled.p`
    font-size: 1.5rem;
    font-family: 'Montsserat', sans-serif;
    padding: 0.5rem;
`;