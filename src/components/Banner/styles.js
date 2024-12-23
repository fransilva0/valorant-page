import styled from "styled-components";

export const FeaturedBanner = styled.div`
    background:
    linear-gradient(
      rgba(0,0,0,.5),rgba(0,0,0,.5)
    ),
    url(${props => props.imageUrl}) center no-repeat;
    background-size: cover;
    height: 90vh;
    box-sizing: border-box;
    padding: 1rem;
    position: relative;
    background-attachment: fixed;

`;

export const FeaturedAgentBanner = styled.div`
    background: #111823;
    height: 90vh;
    box-sizing: border-box;
    padding: 1rem;
    position: relative;
`;

export const DivTexts = styled.div`
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    text-align: center;

`;

export const TextBanner = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: "Montserrat", serif;
    color: #fff;

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const TextAgentBanner = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-family: "Montserrat", serif;
    color: #fff;
`;

export const TitleBanner = styled.h1`
    font-size: 4rem;
    margin-bottom: 2rem;
    color: #fff;
    font-family: 'VALORANT', sans-serif;

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 3rem;
    }
`;

export const Image = styled.img`
    width: 20rem;
    border-radius: 10rem;
    margin-bottom: 2rem;
    background: #fff;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 15rem;
    }
`;