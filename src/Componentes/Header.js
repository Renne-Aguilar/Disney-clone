import React from 'react'
import styled from 'styled-components' 

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>Home</span>
                </a>

                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>Search</span>
                </a>

                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>watchlist</span>
                </a>

                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>Originals</span>
                </a>

                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>Movies</span>
                </a>

                
                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>Series</span>
                </a>

            </NavMenu>
            <UserImg src="/images/viewers-marvel.png"/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
width: 100%;
height: 70px;
background: #090b13;
display: flex;
align-items: center;
padding: 0 40px
overflow-x: hidden;
`

const Logo = styled.img`
 width: 80px
`

const NavMenu = styled.div`
    
    display: flex;
    flex: 1;
    margin-left: 25px;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
        }
    }
`

const UserImg = styled.img`
 width: 48px;
 height: 48px;
 border-radius: 50%;
 cursor: pointer;
`