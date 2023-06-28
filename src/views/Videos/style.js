import styled, { css } from "styled-components";

export const Row = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    min-height: 50px;
    margin-top: 50px;
`

export const Content = styled.main `
    display: grid;
    grid-template-columns: repeat(${({ grid }) => grid}, 1fr);
    grid-gap: 20px;
    margin-top: 20px;

    @media (max-width: 1460px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Results = styled.p `
    font-size: 15px;
    margin-right: auto;
`