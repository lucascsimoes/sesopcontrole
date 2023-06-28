import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'

export const Navigation = styled.aside `
    position: fixed;
    left: 0;
    top: 0;
    max-width: 300px;
    width: 100%;
    height: 100vh;
    overflow: auto;
    ${({ theme }) => css `
        background: ${theme.colors.secondary};
    `}

    nav {
        width: 100%;
    }
`

export const ProfileDisplay = styled.div `
    display: flex;
    align-items: center;
    min-height: 150px;
    padding-inline: 10px;

    img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        ${({ theme }) => css `
            border: 6px solid ${theme.colors.darkSecondary};
        `}
    }

    & > div {
        display: flex;
        gap: 10px;

        & > div {

            p {
                color: white;
                opacity: .4;
            }

            h4 {
                color: white;
                font-size: 18px;
                font-weight: normal;
                margin-bottom: 13px;
            }
        }
    }
`

export const EditProfile = styled(Link) `
    padding: 8px 25px;
    font-size: 12px;
    text-transform: uppercase;
    color: white;
    border: none;
    cursor: pointer;
    ${({ theme }) => css `
        background-color: ${theme.colors.primary};
        border-bottom: 5px solid ${theme.colors.darkPrimary};
    `}
`

export const Navigator = styled(NavLink) `
    display: flex;
    align-items: center;
    padding: 15px 30px;
    color: white;
    font-size: 16px;

    svg {
        min-width: 24px;
        width: 0;
        margin-right: 15px;
    }

    &.active {
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        ${({ theme }) => css `
            background: ${theme.colors.background.primary};
            color: ${theme.colors.secondary};
        `}
    }

    &:not(.active):hover {
        ${({ theme }) => css `
            background: ${theme.colors.hover.secondary};
        `}
    }
`