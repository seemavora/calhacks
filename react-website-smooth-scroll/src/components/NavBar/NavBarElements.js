import styled from "styled-components"
import {Link as LinkR} from 'react-router-dom'
// import {Link as LinkS} from 'react-scroll'
export const Nav = styled.nav `
    backgroundL #000
    height: 80 px;
    margin-top: --80 px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960 px){
        transition: 0.8s all ease;
    }
`
export const NavBarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 80 px
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width:1100px; 
`
export const NavLogo= styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;