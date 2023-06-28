import styled, { css } from "styled-components";

export const PageNotFound = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 600px;
    width: 100%;
    height: 100vh;
    margin: auto;

    h2 {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 36px;
    }

    p {
        font-size: 18px;
        ${({ theme }) => css `
            color: ${theme.colors.darkGray};
        `}
    }

    img {
        width: 300px;
    }
`