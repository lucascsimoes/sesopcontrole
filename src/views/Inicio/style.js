import styled, { css } from "styled-components";
import dashboardImage from '../../images/dashboard.png'

export const Card = styled.div `
    width: 700px;
    height: 230px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    background: linear-gradient(-90deg, rgba(198, 115, 7, .7), rgb(198, 115, 7)), url(${dashboardImage});
    background-size: 100%;
    background-position: center;
    padding: 20px 40px;
    transition: .35s;

    h1 {
        color: white;
        font-style: italic;
        font-size: 40px;
    }

    &:hover {
        background-size: 110%;
        transition: .35s;
    }
`