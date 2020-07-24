import React from 'react';
import Container from './layout/Container';
import Header from './layout/Header';
import Content from './layout/Content';
import Sidebar from './layout/Sidebar';
import MainPanel from './layout/MainPanel';
import Gallery from './Gallery';
import Overview from './layout/Overview';
import Detail from './layout/Detail';

class App extends React.Component {

  render() {
    return (<>

        <Container>
          THIS IS SOME TEXT IN CONTAINER And some more
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
        </>

    );
  }
}

export default App;
