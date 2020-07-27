import React from 'react';
import Container from './layout/Container';
import Header from './layout/Header';
import Content from './layout/Content';
import Sidebar from './layout/Sidebar';
import MainPanel from './layout/MainPanel';
import Gallery from './Gallery';
import Overview from './layout/Overview';
import Detail from './layout/Detail';
import { ThemeProvider } from 'styled-components';

class App extends React.Component {

 state = { theme: {
  colorPrimary: "#eb2f64",
  colorPrimaryLight: "#FF3366",
  colorPrimaryDark: "#BA265D",
  bpLargest: "75em", //1200px
  bpLarge: "68em", //1100px
  bpMedium: "56.25em", //900px
}}




  render() {
    return (<>
    <ThemeProvider theme={this.state.theme}>
        <Container
          marginTB="8rem"
          maxWidth="120rem"
        >
                <Header />
                <Content>
                  <Sidebar />
                  <MainPanel>
                    <Gallery />
                    <Overview />
                    <Detail />
                  </MainPanel>
                </Content>
        </Container>
      </ThemeProvider>
        </>

    );
  }
}

export default App;
