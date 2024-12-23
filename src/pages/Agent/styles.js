import styled from "styled-components";

export const AbilityList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const AbilityCard = styled.li`
    width: 50%;
    display: flex;
    align-items: center;
    background: #111823;
    padding: 2rem;
    margin: 2rem;
    color: #fff;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        width: 80%;
    }
`;

export const Image = styled.img`
    width: 10rem;
    margin: 1rem;
    margin-right: 2rem;
`;

export const TitleAbility = styled.h2`
    font-size: 1.3rem;
    font-family: "Montsserat", sans-serif;
    margin-bottom: 1rem;
`;

export const ResumeAbility = styled.p`
    font-size: 1rem;
    font-family: "Montsserat", sans-serif;
    margin-top: 1rem;
    line-height: 1.5rem;
`;