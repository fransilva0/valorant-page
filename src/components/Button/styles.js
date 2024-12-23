import styled from "styled-components";

export const GradientButton = styled.a`
    padding: 1rem;
    text-transform: uppercase;
    background: linear-gradient(to right, #ff0000, #ff7f7f);
    font-weight: 800;
    font-size: 0.8rem;
    font-family: "Montserrat", serif;
    color: #fff;
    border-radius: 1rem;

`;

export const RedButtonStyled = styled.a`
    padding: 1rem 3rem 1rem 3rem;
    text-transform: uppercase;
    background: #FF4C4C;
    font-family: "Montserrat", serif;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;

    &:hover {
        background: #0A0A0A;
    }

`;