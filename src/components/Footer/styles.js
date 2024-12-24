import styled from "styled-components";

export const FooterSection = styled.footer`
    font-family: "Montsserat", sans-serif;
    width: 100%;
    box-sizing: border-box;
    background: #111823;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    box-sizing: border-box;
    padding: 1rem;
    position: relative;
    color: #fff;

    p {
        margin-bottom: 1rem;
    }

    p a {
        color: #fff;
        text-decoration: underline;
    }

`;

export const Image = styled.img`
    width: 15rem;
    margin-bottom: 2rem;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 10rem;
        
    }

`;