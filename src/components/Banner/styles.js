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

export const DivTexts = styled.div`
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    text-align: center;

`;

export const TextBanner = styled.p`
    font-size: 2rem;
    color: #fff;

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const TitleBanner = styled.h1`
    font-size: 4rem;
    margin-bottom: 2rem;
    font-weight: 800;
    color: #fff;
`;