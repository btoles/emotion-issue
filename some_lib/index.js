import styled from '@emotion/styled';

export { default as theme } from './theme';

export default styled.button`
    background-color: ${props => props.theme.button.primary};
    color: ${props => props.theme.button.fontColor};
`;