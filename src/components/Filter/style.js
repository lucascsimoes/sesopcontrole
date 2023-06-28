import styled, { css } from "styled-components";
import { Slider as Slide } from "@mui/material";

export const FilterButton = styled.button `
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    font-size: 12px;
    gap: 10px;
    color: white;
    margin-left: 40px;
    cursor: pointer;
    ${({ theme }) => css `
        background: ${theme.colors.secondary};
    `}

    svg {
        min-width: 18px;
        width: 0;
    }
`

export const Modal = styled.div `
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    width: ${({ open }) => open ? '100%' : '0'};
    height: 100%;
    overflow: hidden;
    transition: width .5s linear;
    z-index: 5;

    h4 {
        text-transform: uppercase;
        font-size: 15px;
    }

    h5 {
        font-weight: normal;
        font-size: 15px;
        font-style: italic;
        white-space: nowrap;
        max-width: 150px;
        text-overflow: ellipsis;
        overflow: hidden;
        ${({ theme }) => css `
            color: ${theme.colors.mediumGray};
        `}
    }
    
    main {
        position: relative;
        max-width: 500px;
        width: ${({ open }) => open ? '100%' : '0%'};
        height: 100%;
        box-shadow: 0 -20px 20px -15px black;
        transition: width .5s linear;
        padding-bottom: 80px;
        ${({ theme }) => css `
            background: ${theme.colors.background.secondary};
        `}

        h2 {
            text-transform: uppercase;
            font-style: italic;
            margin: 30px 20px 50px;
        }
    }
`

export const SliderDisplay = styled.div `
    padding: 20px;
    margin-bottom: 20px;

    & > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & > div {
        width: 70%;
        margin: 0 auto;
    }
`

export const OptionDisplay = styled.section `
    min-height: 60px;
    user-select: none;
    
    ${({ theme }) => css `
        border-block: 1px solid ${theme.colors.lightGray};
    `}

    & > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-inline: 15px;
        min-height: 60px;
        cursor: pointer;

        & > div {
            display: flex;
            align-items: center;
            gap: 15px;
    
            svg {
                min-width: 22px;
                width: 0;
                transform: ${({ open }) => open ? 'rotate(-90deg)' : 'rotate(0deg)'};
                transition: .35s;
            }
        }
    }

    & > div {
        width: 100%;
        overflow: hidden;
        max-height: ${({ open }) => open ? '200px' : '0'};
        transition: max-height .35s;
    }
`

export const Option = styled.div `
    display: flex;
    align-items: center;
    min-height: 40px;
    width: 90%;
    margin: 0 auto;
    border-radius: 5px;
    margin-block: 8px;
    padding-inline: 20px;
    cursor: pointer;
    position: relative;

    & > div {
        position: relative;
        width: 18px;
        height: 18px;
        border-radius: 3px;
        margin-right: 20px;
        ${({ theme }) => css `
            border: 1px solid ${theme.colors.mediumGray};
        `}

        &:after {
            display: ${({ selected }) => selected ? 'block' : 'none'};
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            width: 12px;
            height: 12px;
            ${({ theme }) => css `
                background: ${theme.colors.primary};
            `}
        }
    }

    & > p {
        text-transform: uppercase;
        font-size: 13px;
    }

    &:after {
        display: flex;
        align-items: center;
        content: '${({ quantity }) => quantity}';
        position: absolute;
        right: 5px;
        font-size: 14px;
    }
`

export const Slider = styled(Slide) `
    margin-top: 20px;
    ${({ theme }) => css `
        color: ${theme.colors.primary};
    `}

    .MuiSlider-track, .MuiSlider-rail, .MuiSlider-mark {
        border: none;
        ${({ theme }) => css `
            background-color: ${theme.colors.primary};
        `}
    }

    .MuiSlider-thumb {
        height: 24px;
        width: 24px;

        ${({ theme }) => css `
            background-color: ${theme.colors.background.secondary};
            border: 2px solid ${theme.colors.primary};
        `}

        &:focus, &:hover, &.Mui-active, &.Mui-focusVisible {
            box-shadow: inherit;
        }
    }
`

export const FilterCommands = styled.footer `
    position: absolute;
    width: 100%;
    bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    overflow: hidden;
    padding-inline: 20px;
    gap: 20px;
    ${({ theme }) => css `
        background-color: ${theme.colors.background.secondary};
    `}

    button {
        cursor: pointer;
        text-transform: uppercase;
        padding: 15px 30px;
        white-space: nowrap;
        border: none;
        color: white;
        font-size: 13px;
        ${({ theme }) => css `
            background-color: ${theme.colors.secondary};
            border-bottom: 6px solid ${theme.colors.darkSecondary};
        `}
    }
`