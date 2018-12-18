import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import Button, { theme } from 'some_lib';

const LocalComponent = styled.button`
  background-color: ${props => props.theme.button.primary};
  color: ${props => props.theme.button.fontColor};
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <LocalComponent>Click</LocalComponent>
        {/* <Button>Press</Button> */}
      </ThemeProvider>
    );
  }
}

export default App;
