import React from 'react';
import Container from './layout/Container';

import { ThemeProvider } from 'styled-components';

class App extends React.Component {

 state = { theme: {
  colorPrimary: "#eb2f64",
  colorPrimaryLight: "#FF3366",
  colorPrimaryDark: "#BA265D",
  bpLargest: "75em", //1200px
  bpLarge: "68em", //1100px
  bpMedium: "56.25em", //900px
  bpSmall: "37.5em", //900px
  bpSmallest: "31.25em", //900px
}}




  render() {
    return (<>
    <ThemeProvider theme={this.state.theme}>
        <Container
          marginTB="8rem"
          maxWidth="120rem"
        >

        </Container>
      </ThemeProvider>
        </>

    );
  }
}

export default App;
