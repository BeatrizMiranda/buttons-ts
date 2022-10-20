import styled from "styled-components";

export const ButtonLoadingStyled = styled.button`
    width: 178.125px;
    height: 42px;
    padding: 10px 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4643c6;
    border-radius: 5px;
    color: #FFFFFF;
    border: 2px solid #4643c6;

    img {
        animation: gira 2s linear infinite;
    }

    @keyframes gira {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;