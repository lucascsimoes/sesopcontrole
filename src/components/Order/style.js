import styled, { css } from "styled-components";

export const Container = styled.div `
    display: flex;
`

export const Columns = styled.div `
    display: flex;
    gap: 3px;
    position: relative;
    margin-left: 20px;
    cursor: pointer;

    &:after {
        display: none;
        content: '${props => `Visualização em ${props.cols} colunas`}';
        position: absolute;
        top: -40px;
        width: max-content;
        padding: 5px 8px;
        color: white;
        font-size: 13px;
        box-shadow: 2px 0 10px -5px black;
        ${({ theme }) => css `
            background: ${theme.colors.darkGray};
        `};
    }

    & > div {
        width: 8px;
        height: 15px;
        background: ${({ selected, theme }) => 
            selected ? theme.colors.darkGray : theme.colors.lightGray};
    }

    &:hover:after {
        display: block;
    }
`