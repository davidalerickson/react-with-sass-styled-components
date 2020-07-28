import React from 'react';
import styled from 'styled-components';

const LegalTextWrapper = styled.div`
    font-size: 1.2rem;
    color: var(--color-grey-light-4);
    text-align: center;
    padding: 2.5rem;

    @media only screen and (max-width: ${props => props.theme.bpMedium}) {
        display: none;
     }
`;

const LegalText = () => {
    return (
        <LegalTextWrapper>
            @copy; 2020 by Trillo All Rights Reserved
        </LegalTextWrapper>
    )
}

export default LegalText
