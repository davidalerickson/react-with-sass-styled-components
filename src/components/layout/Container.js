import React from 'react';
import styled from 'styled-components'


const ContainerWrapper = styled.div`
    max-width: 120rem;
    margin: ${props => props.marginTB} auto;
    background-color: var(--color-grey-light-1);
    box-shadow: var(--shadow-dark);
    min-height: 50rem;
`;

class Container extends React.Component {

    render() {
        return (
            <ContainerWrapper marginTB={this.props.marginTB}>
                {this.props.children}
            </ContainerWrapper>
        )
        }
}

export default Container;


