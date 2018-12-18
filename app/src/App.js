import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import { ThemeContext as AppTheme } from "@emotion/core";
import Button, { theme, ThemeContext as LibTheme } from 'some_lib';

const LocalComponent = styled.button`
  background-color: ${props => props.theme.button.primary};
  color: ${props => props.theme.button.fontColor};
`;

class App extends Component {
  render() {
    return <>
        <div>{`are those themes the same? ${AppTheme === LibTheme}`}</div>
        <ThemeProvider theme={theme}>
          <LocalComponent>Click</LocalComponent>
          {/* <Button>Press</Button> */}
        </ThemeProvider>
      </>;
  }
}

export default App;
