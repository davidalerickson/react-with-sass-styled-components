import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MagGlassIcon} from '../../img/SVG/magnifying-glass.svg';

const SearchBarWrapper = styled.form`
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: $bp-smallest) { //move searchbar to end, also implement flex-wrap: wrap in header to allow it to bumb to next line if need be.
        order: 1;
        flex: 0 0 100%;
        background-color: var(--color-grey-light-2);
     }
    input {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background-color: var(--color-grey-light-2);
        border: none;
        padding: .7rem 2rem;
        margin-right: -3.25rem;
        border-radius: 1000px;
        width: 90%;
        transition: all .2s;
        &:focus {
            background-color: var(--color-grey-light-3);
            outline: none;
            width: 100%;
        }
        &::-webkit-input-placeholder {
            font-weight: 100;
            color: var(--color-grey-light-4);
        }
    }
    input:focus + &__button {
        background-color: var(--color-grey-light-3);
    }
    button {
        border: none;
        background-color: var(--color-grey-light-2);
    }
    svg {
        height: 2rem;
        width: 2rem;
        fill: var(--color-grey-dark-3);
    }
`;

const SearchBar = () => {
    return (
            <SearchBarWrapper>
                <input type="text" placeholder="Search hotels" />
                <button >
                <MagGlassIcon/>
                </button>
            </SearchBarWrapper>
    )
}
export default SearchBar
