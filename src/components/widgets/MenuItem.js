import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

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

const MenuItem = ({ menuText, iconPath }) => {
    return (
        <MenuItemWrapper>
            <a href="#Somewhere">
            <SVG src={iconPath} />
            <span>{menuText}</span>
            </a>
        </MenuItemWrapper>
    )
}

export default MenuItem


/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>key</title>
                <path d="M17.691 4.725c-0.503-2.977-3.22-4.967-6.069-4.441s-5.256 2.816-4.753 5.795c0.107 0.641 0.408 1.644 0.763 2.365l-5.175 7.723c-0.191 0.285-0.299 0.799-0.242 1.141l0.333 1.971c0.058 0.342 0.372 0.572 0.7 0.514l1.516-0.281c0.328-0.059 0.744-0.348 0.924-0.639l2.047-3.311 0.018-0.022 1.386-0.256 2.39-3.879c0.785 0.139 1.912 0.092 2.578-0.031 2.848-0.526 4.087-3.67 3.584-6.649zM15.166 6.252c-0.784 1.17-1.584 0.346-2.703-0.475-1.119-0.818-2.135-1.322-1.352-2.492s2.326-1.455 3.447-0.635c1.12 0.819 1.391 2.432 0.608 3.602z"></path>
                </svg> */