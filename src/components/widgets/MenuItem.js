import React from 'react';
import styled from 'styled-components';

const MenuItemWrapper = styled.li`
        position: relative;
        &:not(:last-child) {
            margin-bottom: .5rem;

            @media only screen and (max-width: $bp-medium) {
                margin: 0;
             }
        }

        @media only screen and (max-width: $bp-medium) {
            flex: 1;
         }

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 3px;
            background-color: var(--color-primary);
            transform: scaleY(0);
            //vert opening for .2s then delayed .2s with transition occurs
            transition: transform .2s,
                        width .4s cubic-bezier(1, 0, 0, 1) .2s,
                        background-color .2s;
        }

        &:hover::before,
        &item-active::before {
            //transform origin default set to center
            transform: scaleY(1);
            width: 100%;
        }

        &:active:before {
            background-color: var(--color-primary-light);
        }

    }

    a:link,
    a:visited {
        color: var(--color-grey-light-1);
        text-decoration: none;
        text-transform: uppercase;
        display: block;
        padding: 1.5rem 3rem;
        //set display flexbox to verically center icon and text
        display: flex;
        align-items: center;
        z-index: 10; //make sure it is on top of animated back
        position: relative; //so that zindex works
        
        @media only screen and (max-width: $bp-medium) {
            justify-content: center;
            padding: 2rem;
         }

         @media only screen and (max-width: $bp-small) { //put icon on top of link text and reduce padding
            flex-direction: column;
            padding: 1.5rem .5rem;
         }

    }
    svg {
        width: 1.75rem;
        height: 1.75rem;
        margin-right: 2rem;
        fill: currentColor;
        @media only screen and (max-width: $bp-small) { //get rid of right margin to allow centering of icon on top of link
            margin-right: 0;
            margin-bottom: 0.7rem;
            width: 1.5rem;
            height: 1.5rem;
         }

`;

const MenuItem = ({ menuText }) => {
    return (
        <MenuItemWrapper>
            <a href="#Somewhere">
            <svg>
                <use xlinkHref="/img/sprite.svg#icon-home" />
            </svg>
            <span>{menuText}</span>
            </a>
        </MenuItemWrapper>
    )
}

export default MenuItem
